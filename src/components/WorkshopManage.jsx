import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';
import {
    TabContent,
    TabPane,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import {cookies} from '../common';
import WorkshopManageAttendeeList from './WorkshopManageAttendeeList';
import WorkshopManagePropose from './WorkshopManagePropose';
import {deleteWorkshop} from '../actions/workshop';
import {authenticate} from '../actions/common';

class WorkshopManage extends Component {
    constructor(props) {
        super(props);
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

    componentWillMount() {
        this.props.authenticate();
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
                <div className="container mt-3">
                    <Nav tabs>
                        <NavItem>
                            <NavLink className={classnames({active: this.state.activeTab === '1'})} onClick={() => {this.tabToggle('1');}}>
                                工作坊
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={classnames({active: this.state.activeTab === '2'})} onClick={() => {this.tabToggle('2');}}>
                                控制台
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <WorkshopManagePropose w_id={this.props.match.params.id}/>
                        </TabPane>
                        <TabPane tabId="2">
                            <section className="mt-4">
                                <h3>動作</h3>
                                <hr/>
                                <Button onClick={this.deleteModalToggle} color="danger">刪除工作坊</Button>
                                <Modal isOpen={this.state.modal} toggle={this.deleteModalToggle} className={this.props.className}>
                                    <ModalHeader toggle={this.deleteModalToggle}>刪除工作坊</ModalHeader>
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
                            </section>
                            <section className="mt-4">
                                <WorkshopManageAttendeeList w_id={this.props.match.params.id}/>
                            </section>
                        </TabPane>
                    </TabContent>
                </div>
            )
        } else {
            return <div/>;
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteWorkshop,
        authenticate
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(WorkshopManage);
