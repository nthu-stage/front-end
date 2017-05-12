import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
    Button,
    Input,
    Label,
    Form,
    FormGroup,
    Col,
} from 'reactstrap';
import {
    ppSubmit,
} from '../actions/propose.js';
import './Propose.css';


class Propose extends Component{
    constructor(props){
        super(props);
        this.inputUrl = null; ////
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleIntroChange = this.handleIntroChange.bind(this);
        this.handleMaxChange = this.handleMaxChange.bind(this);
        this.handleMinChange = this.handleMinChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
        this.handleLocChange = this.handleLocChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleIntroChange = this.handleIntroChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            img_url : "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg",
            date:'',
            startTime:'',
            endTime:'',
            location:'',
            content:'',
            title: '',
            start_datetime: '',
            end_datetime: '',
            min_number: '',
            max_number: '',
            deadline: '',
            introduction: '',
            price: '',

        }
    }

    render(){
        const {img_url} = this.state;
        return(
            <div className="container propose">
                <div>
                    <img src={img_url} className="coverImg" alt='' />
                </div>
                <Form>
                    <FormGroup row>
                        <Label for="exampleUrl" sm={2}>Image url</Label>
                        <Col sm={10}>
                            <Input type="url" name="url" id="exampleUrl" placeholder="Give me an image url!!" onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                </Form>
                <h3>Detail</h3>
                <hr/>
                <div>
                    <Form>
                        <FormGroup>
                            <Label for="date">日期</Label>
                            <Input type="date" name="date" id="date" onChange={this.handleDateChange} required/>
                        </FormGroup>    
                        <FormGroup>
                            <Label for="startTime">開始時間</Label>
                            <Input type="time" name="startTime" id="startTime" onChange={this.handleStartTimeChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="endTime">結束時間</Label>
                            <Input type="time" name="endTime" id="endTime" onChange={this.handleEndTimeChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="deadline">截止日期</Label>
                            <Input type="date" name="deadline" id="deadline" onChange={this.handleDeadlineChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="max_number">最大人數</Label>
                            <Input type="number" name="max_number" id="max_number" onChange={this.handleMaxChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="min_number">最少人數</Label>
                            <Input type="number" name="min_number" id="min_number" onChange={this.handleMinChange} required/>
                        </FormGroup>
                        <FormGroup required>
                            <Label for="location">地點</Label>
                            <Input type="text" name="location" id="location" onChange={this.handleLocChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">價格</Label>
                            <Input type="number" name="price" id="price" onChange={this.handlePriceChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">主題</Label>
                            <Input type="text" name="title" id="title" onChange={this.handleTitleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="introduction">簡介</Label>
                            <Input type="textarea" name="introduction" id="introduction" rows="5" onChange={this.handleIntroChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">詳細介紹</Label>
                            <Input type="textarea" name="content" id="content" rows="10" onChange={this.handleContentChange} required/>
                        </FormGroup>
                        <Button color="primary" type="submit" size="lg" block onClick={this.handleSubmit}>我要提案</Button>
                    </Form>
                </div>
            </div>
        )
    }
    handleInputChange(e){
        const url = e.target.value;
        console.log(url);
        this.setState({
            img_url:url
        });
    }
    handleDateChange(e){
        const date = e.target.value;
        console.log(date);
        this.setState({
            date:date
        });
    }
    handleStartTimeChange(e){
        const time = e.target.value;
        console.log(time);
        this.setState({
            startTime:time
        });
    }
    handleEndTimeChange(e){
        const time = e.target.value;
        console.log(time);
        this.setState({
            endTime:time
        });
    }
    handleDeadlineChange(e){
        const deadline = e.target.value;
        this.setState({
            deadline:deadline,
        });
    }
    handleMaxChange(e){
        const n = e.target.value;
        this.setState({
            max_number: n,
        });
    }
    handleMinChange(e){
        const n = e.target.value;
        this.setState({
            min_number: n,
        });
    }
    handleLocChange(e){
        const location = e.target.value;
        console.log(location);
        this.setState({
            location:location
        });
    }
    handlePriceChange(e){
        const p = e.target.value;
        this.setState({
            price:p
        });
    }
    handleTitleChange(e){
        const title = e.target.value;
        this.setState({
            title:title
        });
    }
    handleIntroChange(e){
        const content = e.target.value;
        this.setState({
            introduction:content
        });
    }
    handleContentChange(e){
        const content = e.target.value;
        this.setState({
            content:content
        });
    }
    handleSubmit(){
        const {img_url,
            date,
            startTime,
            endTime,
            location,
            content,
            title,
            min_number,
            max_number,
            deadline,
            introduction,
            price} = this.state;
        const start_datetime =`${date} ${startTime}`;
        const end_datetime = `${date} ${endTime}`;
        this.props.ppSubmit(img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price);
    }


}

function mapStateToProps(state) {
    return {
        pp:state.pp,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ppSubmit:ppSubmit,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Propose);
