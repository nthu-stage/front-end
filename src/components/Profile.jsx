import React, {Component} from 'react';

export default class Profile extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container">
                <h2>平常有空的時間</h2>
                <p>供講師決定舉辦工作坊的時間</p>
            </div>
        );
    }
}
