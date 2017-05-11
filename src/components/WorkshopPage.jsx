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
import wsSubmit from '../actions/workshopPage.js';
class WorkshopPage extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render(){
        const date = '6/3';
        const time = '20:00';
        const location = 'NTHU';
        const speaker = 'LALALAL';
        return(
            <div className="container">
                <div>
                    <img src="https://d2wq73xazpk036.cloudfront.net/media/27FB7F0C-9885-42A6-9E0C19C35242B5AC/A7BC70EF-2E93-47DA-A355C4B22039324E/thul-6818f8f2-2711-5159-9648-cc23606b037c.jpg?response-content-disposition=inline" className="coverImg" />
                </div>
                <h3>Title</h3>
                <hr/>
                <div className="workshop-info">
                    <ListGroup>
                        <ListGroupItem>日期</ListGroupItem>
                        <ListGroupItem>時間</ListGroupItem>
                        <ListGroupItem>地點</ListGroupItem>
                        <ListGroupItem>演講人</ListGroupItem>
                    </ListGroup>
                </div>
                <h3>Description</h3>
                <hr/>
                <div className="description">
                    <p>本 Seven＆i Holdings Co.（小七的母公司）
                        將以33億美元收購1000家美國便利店和加油站
                        實現2019年的10,000家門店計劃！

                        支付寶母公司『螞蟻金服』用戶超過4.5 億
                        近期計畫合併號稱「東南亞亞馬遜」的電商網站 Lazada
                        旗下線上支付平臺 helloPay，登陸東南亞！


                        在競爭激烈的時代，所需整合相互資源的關鍵，
                        談判溝通的能力就顯得更為重要！

                        談判成功與否，使用框架便是關鍵。
                        巴菲特重視的競爭優勢、執行團隊、管理階層、企業文化，
                        便是談判框架的態度、行為與過程。

                        如何透過談判維持個人和企業競爭優勢？
                    </p>
                </div>
                <Button color="primary" size="lg" block onclick={this.handleSubmit}>我想要報名!!!</Button>
                <Comments href="http://www.facebook.com" width="100%" num_posts="6" />
            </div>
        )
    }
    handleSubmit(){
        this.props.wsSubmit();
    }
}
function mapStateToProps(state) {
    return {
        ws:state.ws,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        wsSubmit:wsSubmit
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopPage);
