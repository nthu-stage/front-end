import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

import { comeUpWithIdea } from '../actions/idea';

class IdeaNewModal extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            skill: '',
            goal: '',
            web_url: '',
            image_url: '',
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const { type, toggle } = this.props;
        let { skill, goal, web_url, image_url } = this.state;
        this.props.comeUpWithIdea({ idea_type: type, skill, goal, web_url, image_url });
        toggle();
    }

    render() {
        const { type, modal, toggle } = this.props;
        const { skill, goal, web_url, image_url } = this.state;

        return (
            <Modal isOpen={modal} toggle={toggle}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        <span className="mr-3"><img className="idea-view-view-facebook-picture" src={this.props.fb.picture_url} alt="fb" /></span>
                        <span className="idea-view-view-modal-title">{this.props.fb.name}</span>
                    </h4>
                    <button onClick={this.props.toggle} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="skill">我想{type === 'teach' ? '教' : '學'}</Label>
                            <Input onChange={e => this.setState({ skill: e.target.value })} value={skill} type="text" name="skill" id="skill" placeholder="各式各樣的才藝技能" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="goal">{type === 'teach' ? '讓你' : '希望'}可以</Label>
                            <Input onChange={e => this.setState({ goal: e.target.value })} value={goal} type="text" name="goal" id="goal" placeholder="達成什麼目標" required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="web_url">範例網頁連結</Label>
                            <Input onChange={e => this.setState({ web_url: e.target.value })} value={web_url} type="url" name="web_url" id="web_url" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image_url">範例圖片連結</Label>
                            <Input onChange={e => this.setState({ image_url: e.target.value })} value={image_url} type="url" name="image_url" id="image_url" />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <div className="w-100">
                            <div className="row">
                                <div className="col">
                                    <Button color="secondary" onClick={this.props.toggle}>取消</Button>
                                </div>
                                <div className="col text-right">
                                    <Button type="submit" color="primary">送出</Button>
                                </div>
                            </div>
                        </div>
                    </ModalFooter>
                </Form>
            </Modal>
        );
    }
}

function mapStateToProps({ fb }) {
    return {
        fb,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        comeUpWithIdea,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaNewModal);
