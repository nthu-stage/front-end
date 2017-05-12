import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class IdeaNewModal extends Component {
    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="skill">我想學</Label>
                            <Input type="text" name="skill" id="skill" placeholder="各式各樣的才藝技能" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="goal">希望可以</Label>
                            <Input type="text" name="goal" id="goal" placeholder="達成什麼目標" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="web_url">範例網頁連結</Label>
                            <Input type="url" name="web_url" id="web_url" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image_url">範例圖片連結</Label>
                            <Input type="url" name="image_url" id="image_url" />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.props.toggle}>送出</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>取消</Button>
                </ModalFooter>
            </Modal>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(IdeaNewModal);
