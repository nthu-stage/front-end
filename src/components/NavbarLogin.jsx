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
                    <img src="https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/14907205_1735976403393352_4070401399338628514_n.jpg?oh=a92d0f7cbf8c444eb53e3b93ba2a18dd&oe=597D50E5" />
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
