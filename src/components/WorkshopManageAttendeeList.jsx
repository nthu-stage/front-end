import React, {Component} from 'react';
import {connect} from 'react-redux';
import fileDownload from "react-file-download";
import stringify from 'csv-stringify';
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
            attendees:[{"name":"haha","email":"a@gmail"},{"name":"2","email":"b@gmail"}]
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
                <ListGroupItem key={p.name} action>
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
                    <Button onClick={()=>fileDownload(JSON.stringify(attendees),"1.json")}>匯出</Button>
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