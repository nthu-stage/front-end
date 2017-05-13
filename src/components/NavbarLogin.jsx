import React, { Component } from 'react';
import { Login } from 'react-facebook';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

import fbLogin from '../actions/fbLogin';

import './NavbarLogin.css';

class NavbarLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };

        this.props.fbLogin(cookies.get('fb') || null);

        this.handleResponse = this.handleResponse.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleResponse(data) {
        let { expiresIn, userID, signedRequest } = data.tokenDetail;
        let fb = { picture_url: data.profile.picture.data.url, userID, signedRequest };
        this.props.fbLogin(fb);
        cookies.set('fb', fb, { maxAge: expiresIn });
    }

    handleLogout() {
        cookies.remove('fb');
        this.props.fbLogin(null);
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
                        <img src={this.props.fb.picture_url} alt="fb" />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to='/pf'>個人頁面</DropdownItem>
                        <DropdownItem onClick={this.handleLogout}>登出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        } else {
            return (
                <Login fields={['name', 'email', 'picture']}
                       onResponse={this.handleResponse}>
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
