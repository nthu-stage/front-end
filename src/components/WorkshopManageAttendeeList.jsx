import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, ListGroup, ListGroupItem, Table} from 'reactstrap';
import {CSVLink} from 'react-csv';

import {listAttendee} from '../actions/workshop.js'

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
            ...next.workshopManageAttendee
        });
    }

    render() {
        let {attendees} = this.state;
        if (attendees.length === 0) {
            return (
                <h3>尚無人報名</h3>
            );
        }
        return (
            <div>
                <Row>
                    <Col>
                        <h3>{`報名人數 ${attendees.length}`}</h3>
                    </Col>
                    <Col className="text-right">
                        <CSVLink data={attendees} filename={"參加名單.csv"} className="btn btn-info">匯出</CSVLink>
                    </Col>
                </Row>
                <Table striped>
                    <thead>
                        <tr>
                            <th>FB 名稱</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendees.map((p, i) => (
                            <tr>
                                <td>{p.name}</td>
                                <td>{p.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps({workshopManageAttendee}) {
    return {workshopManageAttendee}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listAttendee
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopManageAttendeeList);
