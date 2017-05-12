import React, { Component } from 'react';
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TabContent, TabPane } from 'reactstrap';

import './IdeaViewEditModal.css';

class IdeaViewEditModal extends Component {
    constructor(props) {
        super(props);

        this.tabToggle = this.tabToggle.bind(this);
        this.state = {
            activeTab: '1',
            availableTime: [
                {name: '一早', people: 12},
                {name: '二午', people: 8},
                {name: '三晚', people: 4},
                {name: '四晚', people: 3},
                {name: '五晚', people: 1},
            ],
        };
    }

    tabToggle(tab) {
        this.setState({
            activeTab: tab
        });
    }

    render() {
        return (
            <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
                <ModalHeader toggle={this.toggle}>
                    ModalTitle
                </ModalHeader>
                <ModalBody>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <p>
                                我想學畫畫
                            </p>
                            <p>
                                希望可以速寫
                            </p>
                            <p>
                                範例網頁連結：http://google.com
                            </p>
                            <p>
                                範例圖片連結：http://google.com
                            </p>
                            <div className="text-center mt-3">
                                <h6>大家有空的時間</h6>
                                <BarChart width={300}
                                          height={100}
                                          data={this.state.availableTime}
                                          className="idea-view-view-modal-chart">
                                    <XAxis dataKey="name"/>
                                    <Bar dataKey="people" fill="#8884d8" />
                                    <Tooltip />
                                </BarChart>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <Form>
                                <FormGroup>
                                    <Label for="skill">我想學</Label>
                                    <Input type="text" name="skill" id="skill" placeholder="各式各樣的才藝技能" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="goal">希望可以</Label>
                                    <Input type="text" name="goal" id="goal" placeholder="達成什麼目標" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="web_url">範例網頁連結</Label>
                                    <Input type="url" name="web_url" id="web_url" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="image_url">範例圖片連結</Label>
                                    <Input type="url" name="image_url" id="image_url" />
                                </FormGroup>
                            </Form>
                        </TabPane>
                    </TabContent>
                </ModalBody>
                <ModalFooter>
                    <TabContent className="idea-view-edit-modal-footer" activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <div className="row">
                                <div className="col">
                                    <Button color="secondary" onClick={(event) => this.tabToggle('2')}>管理</Button>{' '}
                                    <i className="fa fa-lg fa-heart-o"> 12</i>
                                </div>
                                <div className="col text-right">
                                    <Button color="secondary" onClick={this.props.toggle}>取消</Button>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row">
                                <div className="col">
                                    <Button color="secondary" onClick={(event) => this.tabToggle('1')}>取消</Button>{' '}
                                </div>
                                <div className="col text-center">
                                    <Button color="secondary" onClick={this.props.toggle}>刪除</Button>{' '}
                                </div>
                                <div className="col text-right">
                                    <Button color="primary pull-right" onClick={this.props.toggle}>送出</Button>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </ModalFooter>
            </Modal>
        );
    }
}


function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps)(IdeaViewEditModal);
