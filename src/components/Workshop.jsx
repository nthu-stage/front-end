import React, { Component } from 'react';

import WorkshopNav from './WorkshopNav'
import WorkshopList from './WorkshopList'

export default class Workshop extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchText:'',
            stateFilter:3,
        }
    }
    render() {
        return (
            <div className="container">
                <WorkshopNav passbackSearchText={(e)=>this.setState({searchText:e})} passbackStateFilter={(e)=>this.setState({stateFilter:e})}/>
                <WorkshopList searchText={this.state.searchtext} stateFilter={this.state.stateFilter} />
            </div>
        );
    }
}
