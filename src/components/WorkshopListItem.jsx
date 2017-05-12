import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock, CardTitle, Progress } from 'reactstrap';

import './WorkshopListItem.css';

export default class WorkshopListItem extends Component {
    render() {
        return (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <Card className="unlink" tag={Link} to='/wp'>
                    <CardImg className="workshop-list-item-img" top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=253%C3%97180&w=253&h=180" alt="Card image cap" />
                    <CardBlock>
                        <div className="workshop-list-item-content">
                            <CardTitle>標題</CardTitle>
                            <CardText>忙碌的生活中，你有多久不曾靜下來傾聽自己？你曾經陷在困境迴圈，或負面的思緒中無法走出來嗎？</CardText>
                        </div>
                        <div className="row mt-3">
                            <div className="col col-md-6">12/30 人</div>
                            <div className="col col-md-6 text-right">剩 12 天</div>
                        </div>
                        <Progress color="success" value={40} />
                    </CardBlock>
                </Card>
            </div>
        );
    }
}
