import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

import './ProfileAvailable.css';

class ProfileAvailable extends Component {
    constructor(props) {
        super(props);

        this.genTimeArr = this.genTimeArr.bind(this);
        this.state = {
            availableTime: [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1],
        };
    }

    genTimeArr(idx) {
        let arr = [];
        for (let i = 0; i < 21; i += 3) {
            let time = this.state.availableTime[i + idx];
            arr.push(
                <td key={i + idx}
                    className={time === 1 ? "available" : "not-available"}
                    onClick={event => {
                        let availableTime = this.state.availableTime.slice();
                        availableTime[i + idx] = 1 - availableTime[i + idx];
                        this.setState({
                            availableTime,
                        })
                    }}
                    ></td>
            );
        }
        return arr;
    }

    render() {
        return (
            <Table bordered className="profile-available">
                <thead>
                    <tr>
                        <th>時間</th>
                        <th>一</th>
                        <th>二</th>
                        <th>三</th>
                        <th>四</th>
                        <th>五</th>
                        <th>六</th>
                        <th>日</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>上午</td>
                        {this.genTimeArr(0)}
                    </tr>
                    <tr>
                        <td>下午</td>
                        {this.genTimeArr(1)}
                    </tr>
                    <tr>
                        <td>晚上</td>
                        {this.genTimeArr(2)}
                    </tr>
                </tbody>
            </Table>
        );
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(ProfileAvailable);
