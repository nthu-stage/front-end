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

import NavbarLogin from './NavbarLogin'

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
                <div>
                    <Navbar color="faded" light toggleable>
                            <NavbarToggler right onClick={this.toggle}/>
                            <NavbarBrand href="/">NTHU Stage</NavbarBrand>
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink tag={Link} to='/'>工作坊</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/il'>許願池</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} to='/pp'>我要提案</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavbarLogin />
                                    </NavItem>
                                </Nav>

                            </Collapse>
                    </Navbar>
                </div>


            </Router>
        );
    }
}
