import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaListItem from './IdeaListItem';

class IdeaList extends Component {
    render() {
        if (this.props.ideaSearch) {
            return (
                <div className="row">
                    {this.props.ideaSearch.map(idea => <IdeaListItem key={idea.i_id} {...idea}/>)}
                </div>
            );
        }
        return <div />;
    }
}

function mapStateToProps({ ideaSearch }) {
    return {
        ideaSearch,
    }
}

export default connect(mapStateToProps)(IdeaList);
