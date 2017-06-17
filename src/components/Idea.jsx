import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {history} from '../common';
import IdeaNav from './IdeaNav'
import IdeaList from './IdeaList'
import IdeaViewEditModal from './IdeaViewEditModal'

export default class Idea extends Component {
    constructor(props) {
        super(props);

        this.viewEditToggle = this.viewEditToggle.bind(this);
        this.state = {
            viewEditModal: false,
        };
    }

    viewEditToggle() {
        if (this.state.viewEditModal) {
            history.replace('/i');
        } else {
            this.setState({
                viewEditModal: true,
                searchtext:'',
                order:'new',
            });
        }
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.viewEditToggle();
        }
    }

    render() {
        return (
            <div className="container">
                <IdeaNav passbackSearchtext={(e)=>this.setState({searchtext:e})} passbackOrder={(e)=>this.setState({order:e})}/>
                <IdeaList order={this.state.order} searchtext={this.state.searchtext} />
                <Route path='/i/:i_id' render={props => <IdeaViewEditModal {...props} modal={this.state.viewEditModal} toggle={this.viewEditToggle} />}/>
            </div>
        );
    }
}
