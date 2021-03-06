import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBlock, CardTitle } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Share } from 'react-facebook';
import {history} from '../common';

import { likeSearchIdea } from '../actions/idea';
import './IdeaListItem.css';

class IdeaListItem extends Component {
    constructor(props) {
        super(props);

        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleOnLike = this.handleOnLike.bind(this);
    }

    handleOnLike(e, i_id) {
        e.stopPropagation();
        this.props.likeSearchIdea(i_id);
    }

    handleOnClick(url) {
        history.replace(url);
    }

    render() {
        const { i_id, idea_type, skill, goal, like_number, liked } = this.props;
        return (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                <Card onClick={e => this.handleOnClick(`/i/${i_id}`)} className="idea-list-item unlink">
                    <CardBlock>
                        <div className="idea-list-item-content">
                            <CardTitle>{`我想${idea_type === 'teach' ? '教' : '學'}${skill}`}</CardTitle>
                            <CardText>
                                {`${idea_type === 'teach' ? '讓你' : '希望'}可以${goal}`}
                            </CardText>
                        </div>
                        <div className="row mt-3">
                            <div className="col">
                                <Share href={`/i/${i_id}`}>
                                    <i className="fa fa-lg fa-facebook" aria-hidden="true"> 分享</i>
                                </Share>
                            </div>
                            <div className="col text-right">
                                <Link className="unlink" to={`/i/`}></Link>
                                <i onClick={e => this.handleOnLike(e, i_id)} className={`fa fa-lg ${liked ? 'fa-heart' : 'fa-heart-o'}`}> {like_number}</i>
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
