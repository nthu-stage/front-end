import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
//import {bindActionCreators} from 'redux';   
import{
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
import WorkshopAttendeeList from './WorkshopManageAttendeeList';
import WorkshopManagePropose from './WorkshopManagePropose';
import './WorkshopManage.css';
import {wsDelete} from '../actions/deleteWorkshop.js';
class WorkshopManage extends Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            activeTab: '1',
            modal: false,
            nestedModal: false,
            
        };
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
    }
    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
        nestedModal: !this.state.nestedModal
        });
    }
    render(){
        const attendees = [];
        return(
            <div className="container">
                <Row className="option">
                    <Col sm={6}>
                        <Button onClick={() => this.handleToggle('1')} block>工作坊</Button>
                    </Col>
                    <Col sm={6}>
                        <Button onClick={() => this.handleToggle('2')} block>主控台</Button>
                    </Col>
                </Row>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <WorkshopManagePropose w_id={this.props.match.params.id}/>
                    </TabPane>
                    <TabPane tabId="2" >
                        <WorkshopAttendeeList w_id={this.props.match.params.id}/>
                        <Button onClick={this.toggle} color="danger" size="lg" block>刪除工作坊</Button>
                        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                            確定要刪除工作坊？
                            <br />
                            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested}>
                            <ModalHeader>刪除工作坊</ModalHeader>
                            <ModalBody>請再次確認</ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.handleDelete}>確定</Button>{' '}
                                <Button color="secondary" onClick={this.toggle}>取消</Button>
                            </ModalFooter>
                            </Modal>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="warning" onClick={this.toggleNested}>沒錯 !</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>取消</Button>{' '}
                        </ModalFooter>
                        </Modal>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
    handleToggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    handleDelete(){
        this.toggle();
        this.props.wsDelete(this.props.match.params.id);
    }
}
function mapStateToProps(state) {
    return {
        wm:state.wm,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        wsDelete:wsDelete,
    }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(WorkshopManage);