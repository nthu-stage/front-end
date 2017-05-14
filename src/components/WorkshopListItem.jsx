import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock, CardTitle, Progress } from 'reactstrap';

import './WorkshopListItem.css';

export default class WorkshopListItem extends Component {
    render() {
        let { id, image_url, title, start_datetime, min_number, max_number, introduction, type, deadline, attendees_number } = this.props;
        start_datetime = new Date(start_datetime);
        return (
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                <Card className="unlink" tag={Link} to={`/wp/${id}`}>
                    <CardImg className="workshop-list-item-img" top width="100%" src={image_url} alt="Card image cap" />
                    <CardBlock>
                        <div className="workshop-list-item-content">
                            <CardTitle>{title}</CardTitle>
                            <CardText>{introduction}</CardText>
                        </div>
                        <div className="row mt-3">
                            <div className="col col-md-6">{attendees_number}/{type === 2 ? min_number : max_number} 人</div>
                            <div className="col col-md-6 text-right">{type === 2 ? `剩 ${deadline} 天` : `${start_datetime.getMonth() + 1}/${start_datetime.getDate()}`}</div>
                        </div>
                        <Progress color={type === 2 ? 'warning' : 'success'} value={type === 2 ? attendees_number*100/min_number : 100} />
                    </CardBlock>
                </Card>
            </div>
        );
    }
}
