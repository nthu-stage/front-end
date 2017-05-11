import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import FacebookProvider, { Login } from 'react-facebook';

import NavbarLogin from './NavbarLogin';
import Workshop from './Workshop';
import Idea from './Idea';
import WorkshopPage from './WorkshopPage';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Router>
                <FacebookProvider appId="1812105742383573">
                    <div>
                        <Navbar color="faded" light toggleable>
                            <div className="container">
                                <NavbarToggler right onClick={this.toggle}/>
                                <NavbarBrand tag={Link} to='/'>NTHU Stage</NavbarBrand>
                                <Collapse isOpen={this.state.isOpen} navbar>
                                    <Nav className="ml-auto" navbar>
                                        <NavItem>
                                            <NavLink tag={Link} to='/'>工作坊</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/i'>許願池</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink tag={Link} to='/pp'>我要提案</NavLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <NavbarLogin />
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                        <Route exact path="/" render={() => (
                            <Workshop />
                        )}/>
                        <Route path="/i" render={() => (
                            <Idea />
                        )}/>
                        <Route path="/wp" render={() => (
                            <WorkshopPage />
                        )}/>
                    </div>
                </FacebookProvider>
            </Router>
        );
    }
}