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
    }

    render(){
        const date = '6/3';
        const time = '20:00';
        const location = 'NTHU';
        const speaker = 'LALALAL';
        const imgUrl = "https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg";
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
                            <Input type="date" name="date" id="date" placeholder="date placeholder" />
                        </FormGroup>    
                        <FormGroup>
                            <Label for="time">Time</Label>
                            <Input type="time" name="time" id="time" placeholder="time placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location" placeholder="location" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="speaker">Speaker</Label>
                            <Input type="text" name="speaker" id="speaker" placeholder="speaker" />
                        </FormGroup>
                        <FormGroup className = "inputTextarea">
                            <Label for="speachTitle">SpeachTitle</Label>
                            <Input type="textarea" name="speachTitle" id="speachTitle" placeholder="speachTitle" />
                        </FormGroup>
                        <Button color="primary" size="lg" block onclick={this.handleSubmit}>我要提案</Button>
                    </Form>
                </div>
            </div>
        )
    }
    handleInputChange(){
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
