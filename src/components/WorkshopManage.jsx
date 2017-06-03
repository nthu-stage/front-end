import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    TabContent,
    TabPane,
    Button,
    Row,
    Col,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

import {cookies} from '../common';
import WorkshopAttendeeList from './WorkshopManageAttendeeList';
import WorkshopManagePropose from './WorkshopManagePropose';
import {deleteWorkshop} from '../actions/workshop';
import {authenticate} from '../actions/common';

import './WorkshopManage.css';

class WorkshopManage extends Component {
    constructor(props) {
        super(props);

        this.props.authenticate();

        this.state = {
            activeTab: '1',
            modal: false,
            nestedModal: false
        };
        this.tabToggle = this.tabToggle.bind(this);
        this.deleteModalToggle = this.deleteModalToggle.bind(this);
        this.deleteNestedModalToggle = this.deleteNestedModalToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    tabToggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({activeTab: tab});
        }
    }

    deleteModalToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    deleteNestedModalToggle() {
        this.setState({
            nestedModal: !this.state.nestedModal
        });
    }

    handleDelete() {
        this.deleteModalToggle();
        this.props.deleteWorkshop(this.props.match.params.id);
    }

    render() {
        if (cookies.get('fb')) {
            return (
                <div className="container">
                    <Row className="option">
                        <Col sm={6}>
                            <Button onClick={() => this.tabToggle('1')} block>工作坊</Button>
                        </Col>
                        <Col sm={6}>
                            <Button onClick={() => this.tabToggle('2')} block>主控台</Button>
                        </Col>
                    </Row>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <WorkshopManagePropose w_id={this.props.match.params.id}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <WorkshopAttendeeList w_id={this.props.match.params.id}/>
                            <Button onClick={this.deleteModalToggle} color="danger" size="lg" block>刪除工作坊</Button>
                            <Modal isOpen={this.state.modal} toggle={this.deleteModalToggle} className={this.props.className}>
                                <ModalHeader toggle={this.deleteModalToggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    確定要刪除工作坊？
                                    <Modal isOpen={this.state.nestedModal} toggle={this.deleteNestedModalToggle}>
                                        <ModalHeader>刪除工作坊</ModalHeader>
                                        <ModalBody>請再次確認</ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" onClick={this.handleDelete}>確定</Button>{' '}
                                            <Button color="secondary" onClick={this.deleteModalToggle}>取消</Button>
                                        </ModalFooter>
                                    </Modal>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="warning" onClick={this.deleteNestedModalToggle}>沒錯 !</Button>{' '}
                                    <Button color="secondary" onClick={this.deleteModalToggle}>取消</Button>{' '}
                                </ModalFooter>
                            </Modal>
                        </TabPane>
                    </TabContent>
                </div>
            )
        } else {
            return <div/>;
        }
    }
}

function mapStateToProps({wm}) {
    return {wm};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteWorkshop,
        authenticate
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopManage);
