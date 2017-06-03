import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSVLink} from 'react-csv';
////undone
import {Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import WorkshopManageAttendeeListItem from './WorkshopManageAttendeeListItem';
import {listAttendee} from '../actions/workshop.js'
import {bindActionCreators} from 'redux';

class WorkshopManageAttendeeList extends Component {
    constructor(props) {
        super(props);
        this.props.listAttendee(this.props.w_id);
        this.state = {
            attendees: []
        }
    }

    componentWillReceiveProps(next) {
        this.setState({
            ...next.wsa
        })
    }

    render() {
        const {attendees} = this.state;
        let children = (
            <ListGroupItem className='empty d-flex justify-content-center align-items-center'>
                <div className='empty-text'>目前沒有人報名喔ㄏㄏ</div>
            </ListGroupItem>
        );
        if (attendees.length) {
            children = attendees.map(p => (
                <ListGroupItem key={p.name} action>
                    <WorkshopManageAttendeeListItem {...p}/>
                </ListGroupItem>
            ));
        }
        return (
            <div className='container'>
                <Row>
                    <Col sm={6}>
                        <h3>報名人列表</h3>
                    </Col>
                    <CSVLink data={attendees} filename={"參加名單.csv"} className="btn btn-info">匯出</CSVLink>
                </Row>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}

function mapStateToProps({ wsa }) {
    return {wsa};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listAttendee: listAttendee
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopManageAttendeeList);
