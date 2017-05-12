import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import{
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    Button,
    CardTitle,
    CardText,
    Row,
    Col,
    ListGroup,
    ListGroupItem
} from 'reactstrap';
import WorkshopAttendeeList from './WorkshopManageAttendeeList';
import WorkshopManagePropose from './WorkshopManagePropose';
class WorkshopManage extends Component{
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }
    

    render(){
        const attendees = [];
        //const {attendees} = this.props.getAttendees()

        return(
            <div className="container">
                <Row>
                    <Col sm={6}>
                        <Button onClick={() => this.handleToggle('1')} block>工作坊</Button>
                    </Col>
                    <Col sm={6}>
                        <Button onClick={() => this.handleToggle('2')} block>主控台</Button>
                    </Col>
                </Row>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <WorkshopAttendeeList attendees={attendees}/>
                    </TabPane>
                    <TabPane tabId="2">
                        <WorkshopManagePropose />
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
}
function mapStateToProps(state) {
    return {
        wm:state.wm,
    }
}


export default connect(mapStateToProps)(WorkshopManage);