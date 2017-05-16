import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBlock, CardTitle, Progress } from 'reactstrap';

import './WorkshopListItem.css';

var _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export default class WorkshopListItem extends Component {
    render() {
        let { w_id, image_url, title, min_number, max_number, deadline, pre_deadline, introduction, price, phase, attendees_number } = this.props;
        let invest_countdown = dateDiffInDays(new Date(Date.now()), new Date(pre_deadline));
        let attend_countdown = dateDiffInDays(new Date(Date.now()), new Date(deadline));
        return (
            <div className="col col-12 col-sm-6 col-md-4 mt-3">
                <Card className="unlink" tag={Link} to={`/wp/${w_id}`}>
                    <CardImg className="workshop-list-item-img" top width="100%" src={image_url} alt="Card image cap" />
                    <CardBlock>
                        <div className="workshop-list-item-content">
                            <CardTitle>{title}</CardTitle>
                            <CardText>{introduction}</CardText>
                        </div>
                        <div className="row mt-3">
                            <div className="col col-md-4">{`${price} 元`}</div>
                            <div className="col col-md-8 text-right">{phase === 'investigating' ? `調查倒數 ${invest_countdown} 天` : `報名倒數 ${attend_countdown} 天`}</div>
                        </div>
                        <Progress color={phase === 'investigating' ? 'warning' : 'success'} value={phase === 'investigating' ? attendees_number*100/min_number : 100} />
                        <div className="text-center w-100">
                            <div>{phase === 'investigating' ? `還差 ${min_number - attendees_number} 人達標` : `剩餘 ${max_number - attendees_number} 個座位`}</div>
                        </div>
                    </CardBlock>
                </Card>
            </div>
        );
    }
}
