import React, {Component} from 'react';
import {history} from '../common';
import {Router, Route, Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';
import FacebookProvider from 'react-facebook';

import AppNavLogin from './AppNavLogin';
import AppAlert from './AppAlert';
import Workshop from './Workshop';
import Idea from './Idea';
import WorkshopPage from './WorkshopPage';
import WorkshopPropose from './WorkshopPropose';
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
                                <NavbarBrand tag={Link} to='/'>
                                    <i className="fa fa-cubes fa-lg mr-2" aria-hidden="true"></i>NTHU Stage</NavbarBrand>
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
                                        <AppNavLogin/>
                                    </Nav>
                                </Collapse>
                            </div>
                        </Navbar>
                        <LoadingBar/>
                        <AppAlert/>
                        <Route exact path="/" component={Workshop}/>
                        <Route exact path="/i" component={Idea}/>
                        <Route path="/i/:id" component={Idea}/>
                        <Route exact path="/wp" component={WorkshopPage}/>
                        <Route path="/wp/:id" component={WorkshopPage}/>
                        <Route path="/pp" component={WorkshopPropose}/>
                        <Route path="/pf" component={Profile}/>
                        <Route exact path="/wm" component={WorkshopManage}/>
                        <Route path="/wm/:id" component={WorkshopManage}/>
                    </div>
                </FacebookProvider>
            </Router>
        );
    }
}
