import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProfileAvailable from './ProfileAvailable'
import { showProfile } from '../actions/profile';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.props.showProfile();

    }

    render() {
        if (this.props.pf) {
            const {availableTime, propose, attend, comeUpWith, like} = this.props.pf;
            return (
                <div className="container text-left">
                    <section className="mt-4">
                        <h3>平常有空的時間</h3>
                        <p>供講師決定舉辦工作坊的時間</p>
                        <ProfileAvailable availableTime={availableTime}/>
                    </section>
                    <section className="mt-4">
                        <h3>我提案的工作坊</h3>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>標題</th>
                                    <th>日期</th>
                                    <th>報名人數</th>
                                    <th>達標人數</th>
                                    <th>狀態</th>
                                    <th>管理</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    propose.map(ws => {
                                        return (
                                            <tr key={ws.w_id}>
                                                <th><Link to={`/wp/${ws.w_id}`}>{ws.title}</Link></th>
                                                <td>{ws.start_datetime}</td>
                                                <td>{ws.attendees_number}/{ws.max_number}</td>
                                                <td>{ws.min_number}</td>
                                                <td>{ws.state}</td>
                                                <td><Button tag={Link} to={`/wm/${ws.w_id}`} color="primary">管理</Button></td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </section>
                    <section className="mt-4">
                        <h3>我報名的工作坊</h3>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>標題</th>
                                    <th>日期</th>
                                    <th>狀態</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attend.map(ws => {
                                        return (
                                            <tr key={ws.w_id}>
                                                <th><Link to={`/wp/${ws.w_id}`}>{ws.title}</Link></th>
                                                <td>{ws.start_datetime}</td>
                                                <td>{ws.state}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </section>
                    <section className="mt-4">
                        <h3>我許下的願望</h3>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>願望</th>
                                    <th>人數</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    comeUpWith.map(i => {
                                        return (
                                            <tr key={i.i_id}>
                                                <th><Link to={`/i/${i.i_id}`}>{`我想${i.idea_type === 'teach' ? '教' : '學'}${i.skill}`}</Link></th>
                                                <td>{i.like_number}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </section>
                    <section className="mt-4">
                        <h3>我喜歡的願望</h3>
                        <Table hover>
                            <thead>
                                <tr>
                                    <th>願望</th>
                                    <th>人數</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    like.map(i => {
                                        return (
                                            <tr key={i.i_id}>
                                                <th><Link to={`/i/${i.i_id}`}>{`我想${i.idea_type === 'teach' ? '教' : '學'}${i.skill}`}</Link></th>
                                                <td>{i.like_number}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </Table>
                    </section>
                </div>
            );
        }
        return <div />

    }
}

function mapStateToProps({ pf }) {
    return {
        pf,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showProfile,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
