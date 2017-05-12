import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Row,
    Col
} from 'reactstrap';

class WorkshopAttendee extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {name, email} = this.props;
        return (
            <div className="container">
                <Row>
                    <Col sm={4}>{name}</Col>
                    <Col sm={8}>{email}</Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(WorkshopAttendee);
