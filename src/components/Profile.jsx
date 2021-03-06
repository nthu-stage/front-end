import React, {Component} from 'react';
import {
    Table,
    Badge,
    Form,
    InputGroup,
    InputGroupButton,
    Input
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ProfileAvailable from './ProfileAvailable'
import {showProfile, updateEmail} from '../actions/profile';

import './Profile.css';

function state2badge(phase) {
    let m = {
        'judging': 'primary',
        'judge_na': 'danger',
        'investigating': 'warning',
        'unreached': 'danger',
        'reached': 'success',
        'over': 'default'
    }
    let n = {
        'judging': '審核中',
        'judge_na': '審核失敗',
        'judge_ac': '調查中',
        'unreached': '未達標',
        'reached': '已達標',
        'over': '已結束'
    }
    return <Badge className="profile-badge" color={m[phase]}>{n[phase]}</Badge>;
}

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleUpdateEmail = this.handleUpdateEmail.bind(this);
    }

    handleUpdateEmail(e) {
        e.preventDefault();
        this.props.updateEmail({
            email: this.state.email
        });
    }

    componentWillMount() {
        this.props.showProfile();
    }

    componentWillReceiveProps(next) {
        this.setState({email: next.profile.email || ''});
    }

    render() {
        if (this.props.profile) {
            const {availableTime, propose, attend, comeUpWith, like} = this.props.profile;
            return (
                <div className="container">
                    <section className="mt-4">
                        <h3>Email</h3>
                        <p>供主辦人發送行前信</p>
                        <Form onSubmit={this.handleUpdateEmail}>
                            <InputGroup>
                                <Input value={this.state.email} onChange={e => this.setState({email: e.target.value})} type="email" placeholder="username@gmail.com" required/>
                                <InputGroupButton type="submit" color="primary">儲存</InputGroupButton>
                            </InputGroup>
                        </Form>
                    </section>
                    <section className="mt-4">
                        <h3>平常有空的時間</h3>
                        <p>供主辦人決定工作坊時間</p>
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
                                {propose.map(ws => {
                                    return (
                                        <tr key={ws.w_id}>
                                            <th>
                                                <Link to={`/wp/${ws.w_id}`}>{ws.title}</Link>
                                            </th>
                                            <td>{ws.start_datetime}</td>
                                            <td>{ws.attendees_number}/{ws.max_number}</td>
                                            <td>{ws.min_number}</td>
                                            <td>{state2badge(ws.state)}</td>
                                            <td>
                                                <Link to={`/wm/${ws.w_id}`} color="primary">管理</Link>
                                            </td>
                                        </tr>
                                    );
                                })}
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
                                {attend.map(ws => {
                                    return (
                                        <tr key={ws.w_id}>
                                            <th>
                                                <Link to={`/wp/${ws.w_id}`}>{ws.title}</Link>
                                            </th>
                                            <td>{ws.start_datetime}</td>
                                            <td>{state2badge(ws.state)}</td>
                                        </tr>
                                    );
                                })}
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
                                {comeUpWith.map(i => {
                                    return (
                                        <tr key={i.i_id}>
                                            <th>
                                                <Link to={`/i/${i.i_id}`}>{`我想${i.idea_type === 'teach'
                                                        ? '教'
                                                        : '學'}${i.skill}`}</Link>
                                            </th>
                                            <td>{i.like_number}</td>
                                        </tr>
                                    );
                                })}
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
                                {like.map(i => {
                                    return (
                                        <tr key={i.i_id}>
                                            <th>
                                                <Link to={`/i/${i.i_id}`}>{`我想${i.idea_type === 'teach'
                                                        ? '教'
                                                        : '學'}${i.skill}`}</Link>
                                            </th>
                                            <td>{i.like_number}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </section>
                </div>
            );
        }
        return <div/>
    }
}

function mapStateToProps({profile}) {
    return {profile}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showProfile,
        updateEmail
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
