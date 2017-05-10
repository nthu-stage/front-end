import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
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

        this.responseFacebook = this.responseFacebook.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    responseFacebook(response) {
        console.log(response);
        this.props.fbLogin(response);
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
                        <img src={this.props.fb.picture.data.url}/>
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to='/profile'>個人頁面</DropdownItem>
                        <DropdownItem tag={Link} to='/logout'>登出</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            );
        } else {
            return (
                <FacebookLogin
                    appId="1812105742383573"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    textButton="登入"
                    cssClass="btn btn-primary navbar-btn ml-2 mr-2 facebook-button"
                    icon="fa-facebook"
                />
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
