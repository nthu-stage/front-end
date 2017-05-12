import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button, Form, FormGroup, ButtonGroup, Input } from 'reactstrap';


import './WorkshopNav.css';

class WorkshopNav extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col col-md-9">
                    <Form>
                        <FormGroup>
                            <Input type="text" placeholder="搜尋喜愛的工作坊" />
                        </FormGroup>
                    </Form>
                </div>
                <div className="col col-md-3">
                    <ButtonGroup className="workshop-nav-filter">
                        <Button color="info">提案中</Button>
                        <Button>已達標</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(WorkshopNav);
