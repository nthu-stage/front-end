import React, {Component} from 'react';
import { Comments } from 'react-facebook';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{
    ListGroup,
    ListGroupItem,
    Button,
    Badge
} from 'reactstrap';
import './WorkshopPage.css';
import {wspSubmit} from '../actions/workshopPage.js';
import {getPost} from '../actions/propose.js'
class WorkshopPage extends Component{
    constructor(props){
        super(props);

        this.props.getPost(this.props.match.params.id);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            img_url : "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg", 
            date:'',
            startTime:'',
            endTime:'',
            location:'1',
            content:``,
            title: '教練我好想打REACTㄚㄚㄚㄚㄚ',
            start_datetime: '2017-11-11 18:11',
            end_datetime: '',
            min_number: '',
            max_number: '888',
            deadline: '2017-11-11',
            introduction: '2. 公開分享此貼文，並標註兩個人並留言 @____ @____ 5/12､5/13快來台大音樂節玩，還有台灣虎航機票可以抽！！！',
            price: '10000',
            name:'LALALAND',
            state:4 ,
            attended:false,
        }
    }
    componentWillReceiveProps(next){
       this.setState({
           ...next.wm,
           attended:next.wsp,
       })
    }
    render(){
        const {img_url,start_datetime,end_datetime,location,content,title,max_number,deadline,introduction,price,name,state,attended} = this.state;
        //add name, state, attended in js
        const commentUrl = `www.nthu-stage/wp/${this.props.match.params.id}`;
        const btnStr = attended? "我不能去了QQ" : "我想要報名!!";
        const colorList = ['info', 'danger', 'warning', 'success', 'default', 'default'];
        const badgeColor = colorList[state];
        const strList = ['審核中', '審核失敗', '調查中', '已達標', '未達標', '已結束'];
        const badgeStr =  strList[state];
        return(
            <div className="container workshopPage">
                <div className="coverImg">
                    <img src={img_url}  alt=''/>
                </div>
                <h2><Badge color={badgeColor}>{badgeStr}</Badge>{title}</h2>
                <hr/>
                <div className="workshop-info">
                    <ListGroup>
                        <ListGroupItem>開始時間:　{start_datetime}</ListGroupItem>
                        <ListGroupItem>結束時間:　{end_datetime}</ListGroupItem>
                        <ListGroupItem>地　　點:　{location}</ListGroupItem>
                        <ListGroupItem>人數上限:　{max_number}</ListGroupItem>
                        <ListGroupItem>截止期限:　{deadline}</ListGroupItem>
                        <ListGroupItem>價　　格:　{price}</ListGroupItem>
                        <ListGroupItem>講　　者:　{name}</ListGroupItem>
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
                <Comments href={commentUrl} width="100%" num_posts="6" />
            </div>
        )
    }
    handleSubmit(){
        this.props.wspSubmit();
    }
}
function mapStateToProps(state) {
    return {
        wsp:state.wsp,
        wm:state.wm,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        wspSubmit:wspSubmit,
        getPost:getPost
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopPage);
