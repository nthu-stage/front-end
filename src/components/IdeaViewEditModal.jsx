import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, FormGroup, Label, Input, TabContent, TabPane } from 'reactstrap';
import { BarChart, Bar, XAxis, Tooltip } from 'recharts';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Share } from 'react-facebook';

import { showIdea, likeViewEditIdea, updateIdea, deleteIdea } from '../actions/idea';
import './IdeaViewEditModal.css';

class IdeaViewEditModal extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.tabToggle = this.tabToggle.bind(this);
        this.state = {
            activeTab: '1',
            skill: '',
            goal: '',
            web_url: '',
            image_url: '',
        };
    }

    componentWillMount() {
        this.props.showIdea(this.props.match.params.i_id);
    }

    handleDelete() {
        const { toggle } = this.props;
        const { i_id } = this.props.ideaShow;
        this.props.deleteIdea(i_id);
        toggle();
    }

    handleSubmit(e) {
        e.preventDefault();
        const { toggle } = this.props;
        const { i_id, idea_type } = this.props.ideaShow;
        let { skill, goal, web_url, image_url } = this.state;
        this.props.updateIdea({ i_id, idea_type, skill, goal, web_url, image_url });
        toggle();
    }

    tabToggle(tab) {
        this.setState({
            activeTab: tab
        });
        if (this.props.ideaShow) {
            const { skill, goal, web_url, image_url } = this.props.ideaShow;
            this.setState({
                skill,
                goal,
                web_url,
                image_url,
            });
        }
    }

    render() {
        if (this.props.ideaShow) {
            const { modal, toggle } = this.props;
            const { i_id, idea_type, skill, goal, like_number, web_url, image_url, picture_url, name, isEditor, liked, mostAvaiTime } = this.props.ideaShow;
            return (
                <Modal isOpen={modal} toggle={toggle}>
                    <div className="modal-header idea-view-view-modal-header">
                        <h4 className="modal-title">
                            <span className="mr-3"><img className="idea-view-view-facebook-picture" src={picture_url} alt="fb" /></span>
                            <span className="idea-view-view-modal-title">{name}</span>
                        </h4>
                        <button onClick={this.props.toggle} type="button" className="close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <Form onSubmit={this.handleSubmit}>
                        <ModalBody>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <p>{`我想${idea_type === 'teach' ? '教' : '學'}${skill}`}</p>
                                    <p>{`${idea_type === 'teach' ? '讓你' : '希望'}可以${goal}`}</p>
                                    <p>{`範例網頁連結：${web_url}`}</p>
                                    <p>{`範例圖片連結：${image_url}`}</p>
                                    <div className="text-center mt-3">
                                        <h6>大家有空的時間</h6>
                                        <BarChart width={300}
                                                  height={100}
                                                  data={mostAvaiTime}
                                                  className="idea-view-view-modal-chart">
                                            <XAxis dataKey="name"/>
                                            <Bar dataKey="people" fill="#8884d8" />
                                            <Tooltip />
                                        </BarChart>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <FormGroup>
                                        <Label for="skill">我想{idea_type === 'teach' ? '教' : '學'}</Label>
                                        <Input onChange={e => this.setState({ skill: e.target.value })} value={this.state.skill} type="text" name="skill" id="skill" placeholder="各式各樣的才藝技能" required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="goal">{idea_type === 'teach' ? '讓你' : '希望'}可以</Label>
                                        <Input onChange={e => this.setState({ goal: e.target.value })} value={this.state.goal} type="text" name="goal" id="goal" placeholder="達成什麼目標" required/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="web_url">範例網頁連結</Label>
                                        <Input onChange={e => this.setState({ web_url: e.target.value })} value={this.state.web_url} type="url" name="web_url" id="web_url" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="image_url">範例圖片連結</Label>
                                        <Input onChange={e => this.setState({ image_url: e.target.value })} value={this.state.image_url} type="url" name="image_url" id="image_url" />
                                    </FormGroup>
                                </TabPane>
                            </TabContent>
                        </ModalBody>
                        <ModalFooter>
                            <TabContent className="w-100" activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <div className="row">
                                        <div className="col vertcal-align">
                                            <Share href={`/i/${i_id}`}>
                                                <i className="fa fa-lg fa-facebook mr-3 cursor-pointer" aria-hidden="true"> 分享</i>
                                            </Share>
                                            <i onClick={e => this.props.likeViewEditIdea(i_id)} className={`cursor-pointer fa fa-lg ${liked ? 'fa-heart' : 'fa-heart-o'}`}> {like_number}</i>
                                        </div>
                                        <div className="col text-right">
                                            {isEditor && <Button color="secondary" onClick={(event) => this.tabToggle('2')}>管理</Button>}
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tabId="2">
                                    <div className="row">
                                        <div className="col">
                                            <Button color="secondary" onClick={(event) => this.tabToggle('1')}>取消</Button>{' '}
                                        </div>
                                        <div className="col text-center">
                                            <Button color="secondary" onClick={this.handleDelete}>刪除</Button>{' '}
                                        </div>
                                        <div className="col text-right">
                                            <Button type="submit" color="primary">送出</Button>
                                        </div>
                                    </div>
                                </TabPane>
                            </TabContent>
                        </ModalFooter>
                    </Form>
                </Modal>
            );
        }
        return <div />;
    }
}

function mapStateToProps({ fb, ideaShow }) {
    return {
        fb,
        ideaShow,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        showIdea,
        likeViewEditIdea,
        updateIdea,
        deleteIdea,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeaViewEditModal);
