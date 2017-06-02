import React, { Component } from 'react';
import { Login } from 'react-facebook';
import { NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cookies from '../cookies';
import { regOrLogin, logout } from '../actions/profile';

import './NavbarLogin.css';

class NavbarLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };

        if (cookies.get('fb')) {
            this.props.regOrLogin(cookies.get('fb'), false);
        }

        this.handleResponse = this.handleResponse.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleResponse(data) {
        console.log(data);
        let { name, picture, email, id } = data.profile;
        let { expiresIn, userID, signedRequest } = data.tokenDetail;
        let fb = { name, email, fb_userid: id, picture_url: picture.data.url, userID, signedRequest };
        cookies.set('fb', fb, { maxAge: expiresIn });
        this.props.regOrLogin(fb, true);
    }

    handleLogout() {
        cookies.remove('fb');
        this.props.logout();
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        if (this.props.fb) {
            return (
                <div>
                    <NavItem className="my-auto hidden-xs-down">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret className="facebook-picture">
                                <img src={this.props.fb.picture_url} alt="fb" />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={Link} to='/pf'>個人頁面</DropdownItem>
                                <DropdownItem onClick={this.handleLogout}>登出</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem className="my-auto hidden-sm-up">
                        <NavLink tag={Link} to='/pf'>個人頁面</NavLink>
                    </NavItem>
                    <NavItem className="my-auto hidden-sm-up">
                        <NavLink href="" onClick={this.handleLogout}>登出</NavLink>
                    </NavItem>
                </div>
            );
        } else {
            return (
                <NavItem className="my-auto">
                    <Login className="hidden-xs-down" fields={['name', 'email', 'picture']} onResponse={this.handleResponse}>
                        <Button color="primary" className="navbar-btn ml-2 mr-2 facebook-button hidden-xs-down">登入</Button>
                    </Login>
                    <Login className="hidden-sm-up" fields={['name', 'email', 'picture']} onResponse={this.handleResponse}><NavLink href="" className="nav-link hidden-sm-up">FB 登入</NavLink></Login>
                </NavItem>
            );
        }
    }
}

function mapStateToProps({ fb }) {
    return {
        fb,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        regOrLogin,
        logout,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLogin);
