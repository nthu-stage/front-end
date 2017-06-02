import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Button,
    Input,
    Label,
    Form,
    FormGroup,
    Col
} from 'reactstrap';
import {ppSubmit, isLogin} from '../actions/propose';
import './Propose.css';

class Propose extends Component {
    constructor(props) {
        super(props);

        this.props.isLogin();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            image_url: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=1500%C3%97600&w=1500&h=600',
            title: '',
            start_date: '',
            start_time: '',
            end_date: '',
            end_time: '',
            min_number: '',
            max_number: '',
            deadline_date: '',
            deadline_time: '',
            location: '',
            introduction: '',
            content: '',
            price: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let next_state = JSON.parse(JSON.stringify(this.state));
        let {
            start_date,
            start_time,
            end_date,
            end_time,
            deadline_date,
            deadline_time
        } = next_state;
        next_state.start_datetime = new Date(`${start_date} ${start_time} GMT+0800 (CST)`).getTime() / 1000;
        next_state.end_datetime = new Date(`${end_date} ${end_time} GMT+0800 (CST)`).getTime() / 1000;
        next_state.deadline = new Date(`${deadline_date} ${deadline_time} GMT+0800 (CST)`).getTime() / 1000;
        this.props.ppSubmit(next_state, this.props.w_id);
    }

    render() {
        let {
            image_url,
            title,
            start_date,
            start_time,
            end_date,
            end_time,
            min_number,
            max_number,
            deadline_date,
            deadline_time,
            location,
            introduction,
            content,
            price,
            phase
        } = this.state;
        return (
            <div className="container propose">
                <div className="coverImg">
                    <img src={image_url} alt=''/>
                </div>
                <h3>Detail</h3>
                <hr/>
                <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>圖片網址</Label>
                        <Input type="url" value={image_url} onChange={e => this.setState({image_url: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>開始日期</Label>
                        <Input type="date" value={start_date} onChange={e => this.setState({start_date: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>開始時間</Label>
                        <Input type="time" value={start_time} onChange={e => this.setState({start_time: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>結束日期</Label>
                        <Input type="date" value={end_date} onChange={e => this.setState({end_date: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>結束時間</Label>
                        <Input type="time" value={end_time} onChange={e => this.setState({end_time: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>報名截止日期</Label>
                        <Input type="date" value={deadline_date} onChange={e => this.setState({deadline_date: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>報名截止時間</Label>
                        <Input type="time" value={deadline_time} onChange={e => this.setState({deadline_time: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>最大人數</Label>
                        <Input type="number" value={max_number} onChange={e => this.setState({max_number: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>最少人數</Label>
                        <Input type="number" value={min_number} onChange={e => this.setState({min_number: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>地點</Label>
                        <Input type="text" value={location} onChange={e => this.setState({location: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>價格</Label>
                        <Input type="number" value={price} onChange={e => this.setState({price: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>主題</Label>
                        <Input type="text" value={title} onChange={e => this.setState({title: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>簡介</Label>
                        <Input type="textarea" rows="5" value={introduction} onChange={e => this.setState({introduction: e.target.value})} required/>
                    </FormGroup>
                    <FormGroup>
                        <Label>詳細介紹</Label>
                        <Input type="textarea" rows="10" value={content} onChange={e => this.setState({content: e.target.value})} required/>
                    </FormGroup>
                    <Button color="primary" type="submit" size="lg" block>提交修改</Button>
                </Form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ pp }) {
    return {pp}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ppSubmit: ppSubmit,
        isLogin: isLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Propose);
