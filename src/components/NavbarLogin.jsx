import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';

import './NavbarLogin.css';

export default class NavbarLogin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            facebook: null,
        };

        this.responseFacebook = this.responseFacebook.bind(this);
    }

    responseFacebook(response) {
        console.log(response);
        this.setState({ facebook: response });
    }

    render() {
        if (this.state.facebook) {
            return (
                <div className="facebook-picture">
                    <img src={this.state.facebook.picture.data.url} />
                </div>

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
