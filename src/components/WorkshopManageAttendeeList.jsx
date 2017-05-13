import React, {Component} from 'react';
import {connect} from 'react-redux';
import fileDownload from "react-file-download";
//import stringify from 'csv-stringify';
////undone
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import WorkshopAttendee from './WorkshopAttendee';
import {getAttendee} from '../actions/attendee.js'
import {bindActionCreators} from 'redux';

class WorkshopManageAttendeeList extends Component {
    constructor(props) {
        super(props);
        this.props.getAttendee(this.props.w_id);
        this.state={
            attendees:[]
        }
    }
    componentWillReceiveProps(next){
        
        console.log('componentWillReceiveProps', next.wsa);
        this.setState({
            ...next.wsa,
        })
    }

    
    render(){
        const {attendees} = this.state;
        console.log("list",attendees);
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
        wsa:state.wsa
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAttendee:getAttendee,
    }, dispatch);
}


export default connect(mapStateToProps,mapDispatchToProps)(WorkshopManageAttendeeList);