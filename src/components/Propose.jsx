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

class Propose extends Component{
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

    render(){
        const date = '6/3';
        const time = '20:00';
        const location = 'NTHU';
        const speaker = 'LALALAL';
        const {imgUrl} = this.state;
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
                            <Input type="date" name="date" id="date" placeholder="date placeholder" onChange={this.handleDateChange}/>
                        </FormGroup>    
                        <FormGroup>
                            <Label for="time">Time</Label>
                            <Input type="time" name="time" id="time" placeholder="time placeholder" onChange={this.handleTimeChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location" placeholder="location" onChange={this.handleLocChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="speaker">Speaker</Label>
                            <Input type="text" name="speaker" id="speaker" placeholder="speaker" onChange={this.handleSpeakerChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="speachTitle">SpeachTitle</Label>
                            <Input type="text" name="speachTitle" id="speachTitle" placeholder="speachTitle" onChange={this.handleSpeachTitleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="content">SpeachTitle</Label>
                            <Input type="textarea" name="content" id="content" placeholder="content" rows="10" onChange={this.handleContentChange} />
                        </FormGroup>
                        <Button color="primary" size="lg" block onClick={this.handleSubmit}>我要提案</Button>
                    </Form>
                </div>
            </div>
        )
    }
    handleInputChange(e){
        const url = e.target.value;
        console.log(url);
        this.setState({imgUrl:url});
    }
    handleDateChange(e){
        const date = e.target.value;
        console.log(date);
        this.setState({date:date});
    }
    handleTimeChange(e){
        const time = e.target.value;
        console.log(time);
        this.setState({time:time});
    }
    handleLocChange(e){
        const location = e.target.value;
        console.log(location);
        this.setState({location:location});
    }
    handleSpeakerChange(e){
        const speaker = e.target.value;
        console.log(speaker);
        this.setState({speaker:speaker});
    }
    handleSpeachTitleChange(e){
        const speachTitle = e.target.value;
        console.log(speachTitle);
        this.setState({speachTitle:speachTitle});
    }
    handleContentChange(e){
        const content = e.target.value;
        console.log(content);
        this.setState({content:content});
    }
    handleSubmit(){
        this.setState({...this.state});
    }
    

}

function mapStateToProps(state) {
    return {
        //ws:state.ws,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
       // wsSubmit:wsSubmit
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Propose);
