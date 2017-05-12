import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import ProfileAvailable from './ProfileAvailable'

export default class Profile extends Component {
    render() {
        return (
            <div className="container text-left">
                <section className="mt-4">
                    <h3>平常有空的時間</h3>
                    <p>供講師決定舉辦工作坊的時間</p>
                    <ProfileAvailable />
                </section>
                <section className="mt-4">
                    <h3>我提案的工作坊</h3>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>標題</th>
                                <th>日期</th>
                                <th>人數</th>
                                <th>狀態</th>
                                <th>管理</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><Link to="/wp">第一場工作坊</Link></th>
                                <td>5/23</td>
                                <td>12/50</td>
                                <td>審核中</td>
                                <td><Button tag={Link} to='/wm/2345678' color="primary">管理</Button></td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">第二場工作坊</Link></th>
                                <td>5/22</td>
                                <td>50/60</td>
                                <td>已達標</td>
                                <td><Button tag={Link} to='/wm/2345678' color="primary">管理</Button></td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">第三場工作坊</Link></th>
                                <td>5/1</td>
                                <td>33/46</td>
                                <td>已結束</td>
                                <td><Button tag={Link} to='/wm/2345678' color="primary">管理</Button></td>
                            </tr>
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
                                <th>人數</th>
                                <th>狀態</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><Link to="/wp">第一場工作坊</Link></th>
                                <td>5/23</td>
                                <td>12/50</td>
                                <td>審核中</td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">第二場工作坊</Link></th>
                                <td>5/22</td>
                                <td>50/60</td>
                                <td>已達標</td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">第三場工作坊</Link></th>
                                <td>5/1</td>
                                <td>33/46</td>
                                <td>已結束</td>
                            </tr>
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
                                <th>分享</th>
                                <th>管理</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><Link to="/wp">我想學畫畫</Link></th>
                                <td>12</td>
                                <td><Button tag={Link} to='/' color="primary">分享</Button></td>
                                <td><Button tag={Link} to='/i/2345678' color="primary">管理</Button></td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">我想學寫程式</Link></th>
                                <td>33</td>
                                <td><Button tag={Link} to='/' color="primary">分享</Button></td>
                                <td><Button tag={Link} to='/i/2345678' color="primary">管理</Button></td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">我想學攝影</Link></th>
                                <td>12</td>
                                <td><Button tag={Link} to='/' color="primary">分享</Button></td>
                                <td><Button tag={Link} to='/i/2345678' color="primary">管理</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
                <section className="mt-4">
                    <h3>我收藏的願望</h3>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>願望</th>
                                <th>人數</th>
                                <th>分享</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><Link to="/wp">我想學畫畫</Link></th>
                                <td>12</td>
                                <td><Button tag={Link} to='/' color="primary">分享</Button></td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">我想學寫程式</Link></th>
                                <td>33</td>
                                <td><Button tag={Link} to='/' color="primary">分享</Button></td>
                            </tr>
                            <tr>
                                <th><Link to="/wp">我想學攝影</Link></th>
                                <td>12</td>
                                <td><Button tag={Link} to='/' color="primary">分享</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
        );
    }
}
