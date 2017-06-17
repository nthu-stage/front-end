import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import IdeaListItem from './IdeaListItem';
import {listMoreIdea} from '../actions/idea'
import {bindActionCreators} from 'redux';

let prev_length = 0;
let hasMore = true;
class IdeaList extends Component {
    constructor(props){
        super(props);
        this.state = {
            limit: 20,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidUpdate(){
        console.log(prev_length+" "+ this.props.ideaList.length +" "+hasMore)
        hasMore = (prev_length < this.props.ideaList.length)? true: false;
        prev_length = this.props.ideaList.length;
        console.log(prev_length+" "+ this.props.ideaList.length +" "+hasMore)
    }
    componentWillUnmount(){
        hasMore = true;
        prev_length = 0;
    }
    render() {
        if (this.props.ideaList) {
            
            console.log(this.props);
            return (
                    <InfiniteScroll className="row" initialLoad={false} loadMore={this.handleScroll} hasMore={hasMore} >
                        {this.props.ideaList.map(idea => <IdeaListItem key={idea.i_id} {...idea}/>)}
                    </InfiniteScroll>
            );
        }
        return <div />;
    }
    handleScroll(){
        const {ideaList} = this.props;
        console.log("scroll");
        this.props.listMoreIdea(this.props.searchtext, this.props.order, ideaList.length, this.state.limit);
    }
    
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listMoreIdea,
    }, dispatch);
}

function mapStateToProps({ ideaList }) {
    return {
        ideaList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaList);
