import React, {Component} from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
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
import ppUpdate from '../actions/propose.js';
class WorkshopManagePropose extends Component{
    constructor(props){
        super(props);
        this.inputUrl = null; ////
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleLocChange = this.handleLocChange.bind(this);
        this.handleSpeakerChange = this.handleSpeakerChange.bind(this);
        this.handleSpeachTitleChange = this.handleSpeachTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            imgUrl : "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg", 
            date:'',
            time:'',
            location:'',
            speaker:'',
            SpeachTitle:'',
            content:'',
        }
    }
    componentDidMount(){
        ///this.props.getPropose(propose_id);
        this.setState({
            ...this.props.pp,
        })
    }

    render(){
        const {imgUrl,date,time,location,speaker,speachTitle,content} = this.state;
        return(
            <div className="container propose">
                <div>
                    <img src={imgUrl} className="coverImg" />
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
                            <Label for="date">Date</Label>
                            <Input type="date" name="date" id="date" placeholder="date placeholder" value={date} onChange={this.handleDateChange}/>
                        </FormGroup>    
                        <FormGroup>
                            <Label for="time">Time</Label>
                            <Input type="time" name="time" id="time" placeholder="time placeholder" value={time} onChange={this.handleTimeChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location" placeholder="location" value={location} onChange={this.handleLocChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="speaker">Speaker</Label>
                            <Input type="text" name="speaker" id="speaker" placeholder="speaker" value={speaker} onChange={this.handleSpeakerChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="speachTitle">SpeachTitle</Label>
                            <Input type="text" name="speachTitle" id="speachTitle" placeholder="speachTitle" value={speachTitle} onChange={this.handleSpeachTitleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">SpeachTitle</Label>
                            <Input type="textarea" name="content" id="content" placeholder="content" rows="10" value={content} onChange={this.handleContentChange} />
                        </FormGroup>
                        <Button color="primary" size="lg" block onClick={this.handleSubmit}>確認提交修改</Button>
                    </Form>
                </div>
            </div>
        )
    }
    handleInputChange(e){
        const url = e.target.value;
        console.log(url);
        this.setState({
            imgUrl:url
        });
    }
    handleDateChange(e){
        const date = e.target.value;
        console.log(date);
        this.setState({
            date:date
        });
    }
    handleTimeChange(e){
        const time = e.target.value;
        console.log(time);
        this.setState({
            time:time
        });
    }
    handleLocChange(e){
        const location = e.target.value;
        console.log(location);
        this.setState({
            location:location
        });
    }
    handleSpeakerChange(e){
        const speaker = e.target.value;
        console.log(speaker);
        this.setState({
            speaker:speaker
        });
    }
    handleSpeachTitleChange(e){
        const speachTitle = e.target.value;
        console.log(speachTitle);
        this.setState({
            speachTitle:speachTitle
        });
    }
    handleContentChange(e){
        const content = e.target.value;
        console.log(content);
        this.setState({
            content:content
        });
    }
    handleSubmit(){
        const {imgUrl,date,time,location,speaker,speachTitle,content} = this.state;
        // this.props.ppUpdate(imgUrl,date,time,location,speaker,speachTitle,content,propose_id);
        this.props.ppUpdate(imgUrl,date,time,location,speaker,speachTitle,content);
    }
}

function mapStateToProps(state) {
    return {
        pp:state.pp
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ppUpdate:ppUpdate,
    }, dispatch);
}


export default connect(mapStateToProps)(WorkshopManagePropose);
