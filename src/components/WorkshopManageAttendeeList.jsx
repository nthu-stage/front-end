import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Row, Col, Table} from 'reactstrap';
import {CSVLink} from 'react-csv';

import {listAttendee} from '../actions/workshop.js'

class WorkshopManageAttendeeList extends Component {
    componentWillMount() {
        this.props.listAttendee(this.props.w_id);
    }

    render() {
        if (!this.props.workshopShow.attendees) {
            return <div />;
        }
        let {attendees} = this.props.workshopShow;
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
                        {attendees.map(p => (
                            <tr key={p.email}>
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

function mapStateToProps({workshopShow}) {
    return {workshopShow}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        listAttendee
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkshopManageAttendeeList);
