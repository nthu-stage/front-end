import React, { Component } from 'react';
import { connect } from 'react-redux';

import WorkshopListItem from './WorkshopListItem';

class WorkshopList extends Component {
    render() {
        if (this.props.ws) {
            return (
                <div className="row">
                    {this.props.ws.map(workshop => <WorkshopListItem key={workshop.w_id} {...workshop}/>)}
                </div>
            );
        }
        return <div></div>;
    }
}


function mapStateToProps({ ws }) {
    return {
        ws,
    }
}

export default connect(mapStateToProps)(WorkshopList);
