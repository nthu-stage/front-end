import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{
    Button,
    Input,
    Label,
    Form,
    FormGroup,
    Col,
    
} from 'reactstrap';
import './Propose.css';
import {ppUpdate, getPost} from '../actions/propose.js';

class WorkshopManagePropose extends Component{
    constructor(props){
        super(props);

        this.props.getPost("1111");

        this.inputUrl = null; ////
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleStartDateChange.bind(this);
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
            start_date:'',
            end_date:'',
            startTime:'',
            endTime:'',
            location:'1',
            content:'1',
            title: 'kkkkkkk',
            start_datetime: '2017-11-11 18:11',
            end_datetime: '2017-11-11 18:11',
            min_number: '',
            max_number: '888',
            deadline: '2017-11-11',
            introduction: 'haha',
            price: '10000',
        }
    }

    componentWillReceiveProps(next){
        
        console.log('componentWillReceiveProps', next.wm);
        this.setState({
            ...next.wm,
        })
    }

    render(){
        const {img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price} = this.state;
        const timeForStart = start_datetime.split(' ');
        const start_date = timeForStart[0];
        const startTime = timeForStart[1];
        const timeForEnd = end_datetime.split(' ');
        const end_date = timeForEnd[0];
        const endTime = timeForEnd[1];
        console.log(this.state);
        return(
            <div className="container propose">
                <div className="coverImg">
                    <img src={img_url}  alt=''/>
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
                            <Label for="startDate">開始日期</Label>
                            <Input type="date" name="startDate" id="startDate" value={start_date} onChange={this.handleStartDateChange} required/>
                        </FormGroup>    
                        <FormGroup>
                            <Label for="startTime">開始時間</Label>
                            <Input type="time" name="startTime" id="startTime" value={startTime} onChange={this.handleStartTimeChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="endDate">結束日期</Label>
                            <Input type="date" name="endDate" id="endDate" value={end_date} onChange={this.handleEndDateChange} required/>
                        </FormGroup> 
                        <FormGroup>
                            <Label for="endTime">結束時間</Label>
                            <Input type="time" name="endTime" id="endTime" value={endTime} onChange={this.handleEndTimeChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="deadline">截止日期</Label>
                            <Input type="date" name="deadline" id="deadline" value={deadline} onChange={this.handleDeadlineChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="max_number">最大人數</Label>
                            <Input type="number" name="max_number" id="max_number" value={max_number} onChange={this.handleMaxChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="min_number">最少人數</Label>
                            <Input type="number" name="min_number" id="min_number" value={min_number} onChange={this.handleMinChange} required/>
                        </FormGroup>
                        <FormGroup required>
                            <Label for="location">地點</Label>
                            <Input type="text" name="location" id="location" value={location} onChange={this.handleLocChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">價格</Label>
                            <Input type="number" name="price" id="price" value={price} onChange={this.handlePriceChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">主題</Label>
                            <Input type="text" name="title" id="title" value={title} onChange={this.handleTitleChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="introduction">簡介</Label>
                            <Input type="textarea" name="introduction" id="introduction" rows="5" value={introduction} onChange={this.handleIntroChange} required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">詳細介紹</Label>
                            <Input type="textarea" name="content" id="content" rows="10" value={content} onChange={this.handleContentChange} required/>
                        </FormGroup>
                        <Button color="primary" type="submit" size="lg" block onClick={this.handleSubmit}>提交修改</Button>
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
    handleStartDateChange(e){
        const date = e.target.value;
        console.log(date);
        this.setState({
            start_datetime:`${date} ${this.state.startTime}`
        });
    }
    handleEndDateChange(e){
        const date = e.target.value;
        console.log(date);
        this.setState({
            end_datetime:`${date} ${this.state.endTime}`
        });
    }
    handleStartTimeChange(e){
        const time = e.target.value;
        console.log(time);
        this.setState({
            start_datetime:`${this.state.start_date} ${time}`
        });
    }
    handleEndTimeChange(e){
        const time = e.target.value;
        console.log(time);
        this.setState({
            end_datetime:`${this.state.end_date} ${time}`
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
    handleSubmit(e){
        e.preventDefault();
        const {img_url,
            start_date,
            end_date,
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
        const start_datetime =`${start_date} ${startTime}`;
        const end_datetime = `${end_date} ${endTime}`;
        this.props.ppUpdate(img_url,start_datetime,end_datetime,location,content,title,min_number,max_number,deadline,introduction,price);
        //undone
    }
}

function mapStateToProps(state) {
    return {
        wm:state.wm
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ppUpdate:ppUpdate,
        getPost:getPost
    }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(WorkshopManagePropose);
