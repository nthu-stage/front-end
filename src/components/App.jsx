import React, { Component } from 'react';
import history from '../history';
import { Router, Route, Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import FacebookProvider from 'react-facebook';

import NavbarLogin from './NavbarLogin';
import AppAlert from './AppAlert';
import Workshop from './Workshop';
import Idea from './Idea';
import WorkshopPage from './WorkshopPage';
import Propose from './Propose';
import Profile from './Profile';
import WorkshopManage from './WorkshopManage';

import './App.css';

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
            <Router history={history}>
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
                                        <NavbarLogin />
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                        <AppAlert />
                        <Route exact path="/" component={Workshop} />
                        <Route exact path="/i" component={Idea} />
                        <Route path="/i/:id" component={Idea} />
                        <Route exact path="/wp" component={WorkshopPage} />
                        <Route path="/wp/:id" component={WorkshopPage} />
                        <Route path="/pp" component={Propose} />
                        <Route path="/pf" component={Profile} />
                        <Route exact path="/wm" component={WorkshopManage} />
                        <Route path="/wm/:id" component={WorkshopManage} />
                    </div>
                </FacebookProvider>
            </Router>
        );
    }
}
