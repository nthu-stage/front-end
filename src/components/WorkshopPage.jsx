import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Comments} from 'react-facebook';
import {ListGroup, ListGroupItem, Button, Badge} from 'reactstrap';

import {attendWorkshop} from '../actions/workshop.js';
import {showWorkshop} from '../actions/workshop.js'

import './WorkshopPage.css';

class WorkshopPage extends Component {
    constructor(props) {
        super(props);

        this.props.showWorkshop(this.props.match.params.id);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image_url: "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg",
            date: '',
            startTime: '',
            endTime: '',
            location: '1',
            content: ``,
            title: '教練我好想打REACTㄚㄚㄚㄚㄚ',
            start_datetime: '2017-11-11 18:11',
            end_datetime: '',
            min_number: '',
            max_number: '888',
            deadline: '2017-11-11',
            introduction: '2. 公開分享此貼文，並標註兩個人並留言 @____ @____ 5/12､5/13快來台大音樂節玩，還有台灣虎航機票可以抽！！！',
            price: '10000',
            name: 'LALALAND',
            phase: 'judging'
        }
    }

    componentWillReceiveProps(next) {
        this.setState({
            ...next.wm,
            attended: next.wsp.attended
        })
    }

    render() {
        const {
            image_url,
            title,
            start_datetime,
            end_datetime,
            max_number,
            deadline,
            location,
            introduction,
            content,
            price,
            name,
            phase,
            attended
        } = this.state;
        const {masking} = this.props.wsp;
        const commentUrl = `www.nthu-stage/wp/${this.props.match.params.id}`;
        const btnStr = attended
            ? "取消報名"
            : "我要報名";
        const phase2color = {
            judging: 'primary',
            judge_na: 'danger',
            investigating: 'warning',
            unreached: 'danger',
            reached: 'success',
            over: 'default',
        };
        const phase2str = {
            judging: '審核中',
            judge_na: '審核失敗',
            investigating: '調查中',
            unreached: '未達標',
            reached: '已達標',
            over: '已結束',
        };
        const badgeColor = phase2color[phase];
        const badgeStr = phase2str[phase];
        return (
            <div className={`container workshopPage ${masking
                ? 'mask'
                : ''}`}>
                <div className="coverImg">
                    <img src={image_url} alt=''/>
                </div>
                <h3>
                    <Badge color={badgeColor} className="badge">{badgeStr}</Badge>
                </h3>
                <h2>{title}</h2>
                <hr/>
                <div className="workshop-info">
                    <ListGroup>
                        <ListGroupItem>開始時間：{start_datetime}</ListGroupItem>
                        <ListGroupItem>結束時間：{end_datetime}</ListGroupItem>
                        <ListGroupItem>地 點：{location}</ListGroupItem>
                        <ListGroupItem>人數上限：{max_number}</ListGroupItem>
                        <ListGroupItem>報名截止：{deadline}</ListGroupItem>
                        <ListGroupItem>價 格：{price}</ListGroupItem>
                        <ListGroupItem>講 者：{name}</ListGroupItem>
                    </ListGroup>
                </div>
                <h3>簡介</h3>
                <hr/>
                <div className="description">
                    <p>{introduction}</p>
                </div>
                <h3>內容</h3>
                <hr/>
                <div className="description">
                    <p>{content}</p>
                </div>
                <Button color="primary" size="lg" block onClick={this.handleSubmit}>{btnStr}</Button>
                <Comments href={commentUrl} width="100%" num_posts="6"/>
            </div>
        )
    }
    handleSubmit() {
        this.props.attendWorkshop(this.props.match.params.id);
    }
}
function mapStateToProps(state) {
    return {wsp: state.wsp, wm: state.wm, fb: state.fb}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        attendWorkshop: attendWorkshop,
        showWorkshop: showWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopPage);
