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
            content:'基於安全性高的考量，本校校園公共區無線區域網路認證方式主要採用 802.1x+PEAP (SSID：nthupeap 或 eduroam) ，但因用戶端需額外進行設定，為了讓使用者可以更便捷使用無線網路服務，目前公共區無線網路已建置雙入口認證機制，除了保留原先 802.1x 認證方式外，亦可透過網頁認證方式 (如本系統，SSID：nthu-cc 或 TANetRoaming) 進行認證連線。',
            title: 'kkkkkkk',
            start_datetime: '2017-11-11 18:11',
            end_datetime: '',
            min_number: '',
            max_number: '888',
            deadline: '2017-11-11',
            introduction: 'haha',
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
