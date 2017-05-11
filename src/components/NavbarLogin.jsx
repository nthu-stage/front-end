import React, {Component} from 'react';
import FacebookProvider, { Login } from 'react-facebook';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fbLogin from '../actions/fbLogin';

import './NavbarLogin.css';

class NavbarLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };

        this.handleResponse = this.handleResponse.bind(this);
        this.handleError = this.handleError.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleResponse(data) {
        console.log(data);
        this.props.fbLogin(data);
    }

    handleError(error) {
        this.setState({ error });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        if (this.props.fb) {
            return (
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret className="facebook-picture">
                        <img src={this.props.fb.profile.picture.data.url}/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to='/pf'>個人頁面</DropdownItem>
                        <DropdownItem tag={Link} to='/logout'>登出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        } else {
            return (
                <Login
                    fields="name,email,picture"
                    onResponse={this.handleResponse}
                    onError={this.handleError}>
                    <Button color="primary" className="navbar-btn ml-2 mr-2 facebook-button">登入</Button>
                </Login>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        fb: state.fb,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fbLogin: fbLogin,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLogin);
