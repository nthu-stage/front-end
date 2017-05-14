import React, { Component } from 'react';
import { Button, Form, ButtonGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchIdea } from '../actions/idea';
import IdeaNewModal from './IdeaNewModal';

import './IdeaNav.css';

class IdeaNav extends Component {
    constructor(props) {
        super(props);

        this.handleFilter = this.handleFilter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.newTeachToggle = this.newTeachToggle.bind(this);
        this.newLearnToggle = this.newLearnToggle.bind(this);
        this.viewEditToggle = this.viewEditToggle.bind(this);
        this.state = {
            newTeachModal: false,
            newLearnModal: false,
            viewEditModal: false,
            searchText: '',
            type_filter: 'new',
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.searchIdea(this.state.searchText, this.state.type_filter);
    }

    handleFilter(type_filter) {
        if (this.state.type_filter === type_filter) return;
        this.setState({ type_filter });
        this.props.searchIdea(this.state.searchText, type_filter);
    }

    newTeachToggle() {
        this.setState({
            newTeachModal: !this.state.newTeachModal,
        });
    }

    newLearnToggle() {
        this.setState({
            newLearnModal: !this.state.newLearnModal,
        });
    }

    viewEditToggle() {
        this.setState({
            viewEditModal: !this.state.viewEditModal,
        });
    }

    render() {
        return (
            <div className="row mt-3">
                <div className="col col-md-3">
                    <ButtonGroup className="idea-nav-filter">
                        <Button color="primary" onClick={this.newTeachToggle}>我想教</Button>
                        <IdeaNewModal type="teach" modal={this.state.newTeachModal} toggle={this.newTeachToggle} />
                        <Button color="danger" onClick={this.newLearnToggle}>我想學</Button>
                        <IdeaNewModal type="learn" modal={this.state.newLearnModal} toggle={this.newLearnToggle} />
                    </ButtonGroup>
                </div>
                <div className="col col-md-6">
                    <Form onSubmit={this.handleSubmit}>
                        <Input type="text" onChange={e => this.setState({searchText: e.target.value})} placeholder="尋找願望" />
                    </Form>
                </div>
                <div className="col col-md-3">
                    <ButtonGroup className="idea-nav-filter">
                        <Button color={this.state.type_filter === 'new' ? 'info' : 'secondary'} onClick={e => this.handleFilter('new')}>最新</Button>
                        <Button color={this.state.type_filter === 'hot' ? 'info' : 'secondary'} onClick={e => this.handleFilter('hot')}>熱門</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        searchIdea,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(IdeaNav);
