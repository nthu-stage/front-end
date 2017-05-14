import React, { Component } from 'react';
import { Button, Form, ButtonGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchWorkshop } from '../actions/workshop';

import './WorkshopNav.css';

class WorkshopNav extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.state = {
            searchText: '',
            stateFilter: 3,
        };

        this.props.searchWorkshop(this.state.searchText, this.state.stateFilter);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchWorkshop(this.state.searchText, this.state.stateFilter);
    }

    handleFilter(prop, goal) {
        this.setState({stateFilter: (prop << 1) + goal});
        this.props.searchWorkshop(this.state.searchText, (prop << 1) + goal);
    }

    render() {
        const { stateFilter } = this.state;
        let prop = stateFilter >> 1, goal = stateFilter & 1;
        return (
            <div className="row mt-3">
                <div className="col col-md-9">
                    <Form onSubmit={this.handleSubmit}>
                        <Input type="text" onChange={e => this.setState({searchText: e.target.value})} value={this.state.searchText} placeholder="搜尋喜愛的工作坊" />
                    </Form>
                </div>
                <div className="col col-md-3">
                    <ButtonGroup className="workshop-nav-filter">
                        <Button color={prop ? 'info' : 'secondary'} onClick={e => this.handleFilter(1 - prop, goal)}>提案中</Button>
                        <Button color={goal ? 'info' : 'secondary'} onClick={e => this.handleFilter(prop, 1 - goal)}>已達標</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchWorkshop,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(WorkshopNav);
