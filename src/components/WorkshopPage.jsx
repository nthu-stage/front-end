import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Comments} from 'react-facebook';
import {
    ListGroup,
    ListGroupItem,
    Badge,
    Card,
    Button,
    CardHeader,
    CardFooter,
    CardBlock,
    CardTitle,
    CardText,
    CardImg
} from 'reactstrap';

import {showWorkshop, attendWorkshop} from '../actions/workshop.js';

import './WorkshopPage.css';

class WorkshopPage extends Component {
    constructor(props) {
        super(props);

        this.props.showWorkshop(this.props.match.params.id);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image_url: '',
            date: '',
            startTime: '',
            endTime: '',
            location: '',
            content: '',
            title: '',
            start_datetime: '',
            end_datetime: '',
            min_number: '',
            max_number: '',
            deadline: '',
            introduction: '',
            price: '',
            name: '',
            phase: ''
        }
    }

    componentWillReceiveProps(next) {
        console.log('componentWillReceiveProps', next.workshopPage.attended);
        this.setState({
            ...next.workshopPage
        })
    }

    handleSubmit() {
        this.props.attendWorkshop(this.props.match.params.id);
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
        const {masking} = this.props.workshopPage;
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
            over: 'default'
        };
        const phase2str = {
            judging: '審核中',
            judge_na: '審核失敗',
            investigating: '調查中',
            unreached: '未達標',
            reached: '已達標',
            over: '已結束'
        };
        const badgeColor = phase2color[phase];
        const badgeStr = phase2str[phase];
        return (
            <div className={`container my-3 ${masking
                ? 'mask'
                : ''}`}>
                <Card>
                    <CardHeader className="text-center" tag="h3">
                        <Badge className="workshop-page-badge" color={badgeColor}>{badgeStr}</Badge>{title}
                    </CardHeader>
                    <CardImg top width="100%" src={image_url} alt="Card image cap" />
                    <CardFooter>
                        <CardText className="workshop-page-info">
                            <ul>
                                <li><i className="fa fa-calendar" aria-hidden="true"/>工作坊時間：{`${start_datetime} ~ ${end_datetime}`}</li>
                                <li><i className="fa fa-map-marker" aria-hidden="true"/>工作坊地點：{location}</li>
                                <li><i className="fa fa-male" aria-hidden="true"></i>人數上限：{max_number}</li>
                                <li><i className="fa fa-calendar-times-o" aria-hidden="true"></i>報名截止：{deadline}</li>
                                <li><i className="fa fa-money" aria-hidden="true"></i>價 格：{price}</li>
                                <li><i className="fa fa-user-o" aria-hidden="true"></i>講 者：{name}</li>
                            </ul>
                        </CardText>
                    </CardFooter>
                    <CardBlock>
                        <CardTitle>簡介</CardTitle>
                        <CardText className="description">{introduction}</CardText>
                        <CardTitle>內容</CardTitle>
                        <CardText className="description">{content}</CardText>
                        <Button color={attended ? 'danger' : 'primary'} size="lg" block onClick={this.handleSubmit}>{btnStr}</Button>
                        <Comments href={commentUrl} width="100%" num_posts="6"/>
                    </CardBlock>
                </Card>


            </div>
        )
    }
}

function mapStateToProps({workshopPage}) {
    return {workshopPage};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        attendWorkshop: attendWorkshop,
        showWorkshop: showWorkshop
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopPage);
