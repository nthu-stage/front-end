import React, {Component} from 'react';
import {connect} from 'react-redux';

import WorkshopListItem from './WorkshopListItem';

class WorkshopList extends Component {
    render() {
        if (this.props.workshop) {
            return (
                <div className="row">
                    {this.props.workshop.map(workshop => <WorkshopListItem key={workshop.w_id} {...workshop}/>)}
                </div>
            );
        }
        return <div></div>;
    }
}

function mapStateToProps({workshop}) {
    return {workshop}
}

export default connect(mapStateToProps)(WorkshopList);
