import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import InfiniteScroll from 'react-infinite-scroller';
import {listMoreWorkshop} from '../actions/workshop';


import WorkshopListItem from './WorkshopListItem';
let prev_length = 0;
let hasMore = true;
class WorkshopList extends Component {
    constructor(props){
        super(props);
        this.state={
            limit:10,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidUpdate(){
        console.log(prev_length+" "+ this.props.workshopList.length +" "+hasMore)       
        hasMore = (prev_length < this.props.workshopList.length)? true: false;
        prev_length = this.props.workshopList.length;
        console.log(prev_length+" "+ this.props.workshopList.length +" "+hasMore)   
    }
    componentWillUnmount(){
        hasMore = true;
        prev_length = 0;
    }
    render() {
        console.log(this.props.workshopList)
        if (this.props.workshopList) {
            return (
                <InfiniteScroll className="row" initialLoad={false} loadMore={this.handleScroll} hasMore={hasMore} >
                    {this.props.workshopList.map(workshop => <WorkshopListItem key={workshop.w_id} {...workshop}/>)}
                </InfiniteScroll>
            );
        }
        return <div></div>;
    }
    handleScroll(){
        
        const workshop = this.props.workshopList;
        console.log(workshop.length)
        console.log("scroll")
        this.props.listMoreWorkshop(this.props.searchText, this.props.stateFilter, workshop.length, this.state.offset);
    }
}

function mapStateToProps({workshopList}) {
    return {workshopList}
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listMoreWorkshop,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopList);
