import React, {Component} from 'react';

import IdeaNav from './IdeaNav'
import IdeaList from './IdeaList'

export default class Idea extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <IdeaNav />
                <IdeaList />
            </div>
        );
    }
}
