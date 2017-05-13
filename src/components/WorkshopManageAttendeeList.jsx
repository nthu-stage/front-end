import React, {Component} from 'react';
import {connect} from 'react-redux';
import fileDownload from "react-file-download";
import csv from 'csv';
////undone
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import WorkshopAttendee from './WorkshopAttendee';
class WorkshopManageAttendeeList extends Component {
    constructor(props) {
        super(props);
        this.state={
            attendees:[{"name":"haha","email":"a@gmail"}]
        }
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
                <ListGroupItem key={p.id} action>
                    <WorkshopAttendee {...p} />
                </ListGroupItem>
            ));
        }
        console.log(attendees);
        return (
            <div className='conyainer'>
                <Row>
                    <Col sm={6}>
                        <h3>報名人列表</h3>
                    </Col>
                    <Button onClick={()=>fileDownload(csv.stringify(attendees),"1.csv")}>匯出</Button>
                </Row>
                <ListGroup>{children}</ListGroup>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(WorkshopManageAttendeeList);