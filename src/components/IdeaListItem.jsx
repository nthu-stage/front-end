import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock, CardTitle, Progress, Button } from 'reactstrap';

import IdeaViewEditModal from './IdeaViewEditModal'

import './IdeaListItem.css';

export default class IdeaListItem extends Component {
    constructor(props) {
        super(props);

        this.viewEditToggle = this.viewEditToggle.bind(this);
        this.state = {
            viewEditModal: false,
        };
    }

    viewEditToggle() {
        this.setState({
            viewEditModal: !this.state.viewEditModal
        });
    }

    render() {
        return (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <Card onClick={this.viewEditToggle} className="idea-list-item">
                    <CardBlock>
                        <div className="idea-list-item-content">
                            <CardTitle>我想學畫畫</CardTitle>
                            <CardText>忙碌的生活中，你有多久不曾靜下來傾聽自己？你曾經陷在困境迴圈，或負面的思緒中無法走出來嗎？忙碌的生活中，你有多久不曾靜下來傾聽自己？你曾經陷在困境迴圈，或負面的思緒中無法走出來嗎？</CardText>
                        </div>
                        <div className="row mt-3">
                            <div className="col text-center">
                                <Link to='/wpp' className="unlink">
                                    <i className="fa fa-lg fa-heart-o"> 12</i>
                                </Link>
                            </div>
                        </div>
                    </CardBlock>
                </Card>
                <IdeaViewEditModal modal={this.state.viewEditModal} toggle={this.viewEditToggle} />
            </div>
        );
    }
}
