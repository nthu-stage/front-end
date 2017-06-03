import React, {Component} from 'react';
import {Login} from 'react-facebook';
import {
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {cookies, history} from '../common';
import {regOrLogin} from '../actions/profile';

import './AppNavLogin.css';

class AppNavLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            fb: cookies.get('fb')
        };

        if (cookies.get('fb')) {
            this.props.regOrLogin(cookies.get('fb'), false);
        }

        this.handleResponse = this.handleResponse.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    handleResponse(data) {
        console.log('handle fb login', data);
        let {name, picture, email} = data.profile;
        let {expiresIn, userID, signedRequest} = data.tokenDetail;
        let fb = {
            name,
            email,
            picture_url: picture.data.url,
            userID,
            signedRequest
        };
        cookies.set('fb', fb, {maxAge: expiresIn});
        this.setState({fb});
        this.props.regOrLogin(fb, true);
    }

    handleLogout() {
        cookies.remove('fb');
        this.setState({fb: null});
        history.replace('/');
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        if (this.state.fb) {
            return (
                <div>
                    <NavItem className="my-auto hidden-xs-down">
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle caret className="facebook-picture">
                                <img src={this.state.fb.picture_url} alt="fb"/>
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
                    <Login className="hidden-sm-up" fields={['name', 'email', 'picture']} onResponse={this.handleResponse}>
                        <NavLink href="" className="nav-link hidden-sm-up">FB 登入</NavLink>
                    </Login>
                </NavItem>
            );
        }
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        regOrLogin
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(AppNavLogin);
