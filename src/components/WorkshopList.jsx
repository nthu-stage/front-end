import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkshopListItem from './WorkshopListItem';

class WorkshopList extends Component {
    render() {
        return (
            <div className="row">
                <WorkshopListItem />
                <WorkshopListItem />
                <WorkshopListItem />
                <WorkshopListItem />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(WorkshopList);
