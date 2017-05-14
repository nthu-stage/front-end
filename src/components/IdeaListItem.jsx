import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBlock, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { likeSearchIdea } from '../actions/idea';
import './IdeaListItem.css';

class IdeaListItem extends Component {
    render() {
        const { i_id, idea_type, skill, goal, like_number, liked } = this.props;
        return (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <Card tag={Link} to={`/i/${i_id}`} className="idea-list-item unlink">
                    <CardBlock>
                        <div className="idea-list-item-content">
                            <CardTitle>{`我想${idea_type === 'teach' ? '教' : '學'}${skill}`}</CardTitle>
                            <CardText>
                                {`${idea_type === 'teach' ? '讓你' : '希望'}可以${goal}`}
                            </CardText>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-center">
                                <i onClick={e => this.props.likeSearchIdea(i_id)} className={`fa fa-lg ${liked ? 'fa-heart' : 'fa-heart-o'}`}> {like_number}</i>
                            </div>
                        </div>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        likeSearchIdea,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaListItem);
