import React, {Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import './WorkshopPage.css';
import wspSubmit from '../actions/workshopPage.js';
class WorkshopPage extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            img_url : "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg", 
            date:'',
            startTime:'',
            endTime:'',
            location:'1',
            content:`最初，大地守護神化身SPIDER並降臨地球，為審判揭開序幕。

人類無止盡的摧殘，導致世界陷入黑暗渾沌，為了將地球從猖狂的人類手中救出、於是，守護神化身成SPIDER，並且在2016審判日降臨，企圖將地球焚為灰燼後重生成樂土Arcadia，但是SPIDER以鐳射掃描人類後，發現Raver皆有著善良美麗的心，不過這樣仍不夠，SPIDER決定以火焰與雷電作為武裝，再次襲擊地球，讓人類臣服於SPIDER之下。於是，SPIDER再次汲取能量、蓄勢待發，劃破天際的『Lighting閃電風暴』展開新的奏章⋯⋯

2017年11月11-12日 Arcadia 再度入侵，將再度震撼您的感官神經！`,
            title: 'kkkkkkk',
            start_datetime: '2017-11-11 18:11',
            end_datetime: '',
            min_number: '',
            max_number: '888',
            deadline: '2017-11-11',
            introduction: '2. 公開分享此貼文，並標註兩個人並留言 @____ @____ 5/12､5/13快來台大音樂節玩，還有台灣虎航機票可以抽！！！',
            price: '10000',
        }
    }
    componentDidMount(){
       // this.props.getWorkshop();///undone
    }
    render(){
        const {img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price} = this.state;
        const timeForStart = start_datetime.split(' ');
        const date = timeForStart[0];
        const startTime = timeForStart[1];
        const timeForEnd = end_datetime.split(' ');
        const endTime = timeForEnd[1];
        const commentUrl = `www.nthu-stage/wp/100000`;
        return(
            <div className="container workshopPage">
                <div>
                    <img src={img_url} className="coverImg" />
                </div>
                <h3>{title}</h3>
                <hr/>
                <div className="workshop-info">
                    <ListGroup>
                        <ListGroupItem>開始時間: {start_datetime}</ListGroupItem>
                        <ListGroupItem>結束時間: {end_datetime}</ListGroupItem>
                        <ListGroupItem>地點: {location}</ListGroupItem>
                        <ListGroupItem>人數上限: {max_number}</ListGroupItem>
                        <ListGroupItem>演講人</ListGroupItem>
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
                <Button color="primary" size="lg" block onClick={this.handleSubmit}>我想要報名!!!</Button>
                <Comments href={commentUrl} width="100%" num_posts="6" />
            </div>
        )
    }
    handleSubmit(){
        this.props.wsSubmit();
    }
}
function mapStateToProps(state) {
    return {
        wsp:state.wsp,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        wspSubmit:wspSubmit
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopPage);
