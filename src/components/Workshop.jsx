import React, {Component} from 'react';

import WorkshopNav from './WorkshopNav'
import WorkshopList from './WorkshopList'

export default class Workshop extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <WorkshopNav />
                <WorkshopList />
            </div>
        );
    }
}
