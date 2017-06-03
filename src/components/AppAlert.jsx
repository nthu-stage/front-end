import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { hideAlert } from '../actions/common';

class AppAlert extends Component {
    render() {
        if (!this.props.alert) return <div />;
        let { msg, type, isOpen } = this.props.alert;
        return (
            <Alert color={type} isOpen={isOpen} toggle={() => this.props.hideAlert(0)}>{msg}</Alert>
        );
    }
}

function mapStateToProps({ alert }) {
    return {
        alert,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        hideAlert,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppAlert);
