import React, {Component} from 'react';
import {connect} from 'react-redux';

import WorkshopListItem from './WorkshopListItem';

class WorkshopList extends Component {
    render() {
        if (this.props.workshopList) {
            return (
                <div className="row">
                    {this.props.workshopList.map(workshop => <WorkshopListItem key={workshop.w_id} {...workshop}/>)}
                </div>
            );
        }
        return <div></div>;
    }
}

function mapStateToProps({workshopList}) {
    return {workshopList}
}

export default connect(mapStateToProps)(WorkshopList);
