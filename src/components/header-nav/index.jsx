import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Modal } from 'antd';

import LinkButton from "../link-button";
import { reqWeather } from "../../api";
import { formateDate } from "../../utils/dateUtils";
import menuList from "../../config/config";
import './index.less';


class Header extends Component {



    state = {
        currentTime: formateDate(Date.now()),
        dayPictureUrl: '',//图片url
        weather: '',//天气文本
    }

    /* 
    退出登录
    */
    logout = () => {
        //显示确认提示
        Modal.confirm({
            title: '确认退出吗?',
            onOk: () => {
                console.log('OK');
                //确定后,删除存储的用户信息
                //local中的，内存中的
                this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel');
            },
        })
    };

    /* 
    根据当前请求的path得到对应的title
    */
    getTitle = () => {
        let title = ''
        const path = this.props.location.pathname;
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title
            } else if (item.children) {
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    title = cItem.title
                }
            }
        })
        return title
    };

    /* 
    获取天气信息的显示
    */
    getWeather = async () => {
        //发请求
        const { dayPictureUrl, weather } = await reqWeather('杭州')
        //更新状态
        this.setState({
            dayPictureUrl,
            weather
        })

    };

    componentDidMount() {
        //启动循环定时器
        this.intervalId = setInterval(() => {
            this.setState({
                //将currentTime更新为当前时间值
                currentTime: formateDate(Date.now())
            })
        }, 1000)
        //发jsonp请求获取天气信息显示
        this.getWeather()
    }

    componentWillMount() {
        clearInterval(this.intervalId)
    }

    render() {
        const { currentTime, dayPictureUrl, weather } = this.state

        //得到当前需要显示的title
        const title = this.getTitle()

        return (
            <div className="header-nav">
                <div className="header-top">
                    <span>欢迎，admin</span>
                    {/* 组件的标签体作为标签的children属性传入 */}
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt="weather" />
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)