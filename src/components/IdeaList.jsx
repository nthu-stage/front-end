import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaListItem from './IdeaListItem';

class IdeaList extends Component {
    render() {
        if (this.props.ideaList) {
            return (
                <div className="row">
                    {this.props.ideaList.map(idea => <IdeaListItem key={idea.i_id} {...idea}/>)}
                </div>
            );
        }
        return <div />;
    }
}

function mapStateToProps({ ideaList }) {
    return {
        ideaList,
    }
}

export default connect(mapStateToProps)(IdeaList);
