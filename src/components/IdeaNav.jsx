import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, ButtonGroup, Input } from 'reactstrap';

import IdeaNewModal from './IdeaNewModal';

import './IdeaNav.css';

class IdeaNav extends Component {
    constructor(props) {
        super(props);

        this.newTeachToggle = this.newTeachToggle.bind(this);
        this.newLearnToggle = this.newLearnToggle.bind(this);
        this.viewEditToggle = this.viewEditToggle.bind(this);
        this.state = {
            newTeachModal: false,
            newLearnModal: false,
            viewEditModal: false,
        };
    }

    newTeachToggle() {
        this.setState({
            newTeachModal: !this.state.newTeachModal,
        });
    }

    newLearnToggle() {
        this.setState({
            newLearnModal: !this.state.newLearnModal,
        });
    }

    viewEditToggle() {
        this.setState({
            viewEditModal: !this.state.viewEditModal,
        });
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col col-md-3">
                    <ButtonGroup className="idea-nav-filter">
                        <Button color="primary" onClick={this.newTeachToggle}>我想教</Button>
                        <IdeaNewModal type="teach" modal={this.state.newTeachModal} toggle={this.newTeachToggle} />
                        <Button color="danger" onClick={this.newLearnToggle}>我想學</Button>
                        <IdeaNewModal type="learn" modal={this.state.newLearnModal} toggle={this.newLearnToggle} />
                    </ButtonGroup>
                </div>
                <div className="col col-md-6">
                    <Form>
                        <FormGroup>
                            <Input type="text" placeholder="尋找願望" />
                        </FormGroup>
                    </Form>
                </div>
                <div className="col col-md-3">
                    <ButtonGroup className="idea-nav-filter">
                        <Button color="info">最新</Button>
                        <Button>熱門</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(IdeaNav);
