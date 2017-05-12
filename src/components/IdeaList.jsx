import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaListItem from './IdeaListItem';

class IdeaList extends Component {
    render() {
        return (
            <div className="row">
                <IdeaListItem />
                <IdeaListItem />
                <IdeaListItem />
                <IdeaListItem />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(IdeaList);
