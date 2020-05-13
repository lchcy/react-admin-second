import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { Menu, Icon } from 'antd';

import menuList from '../../config/config';
import logo from '../../assets/images/logo.png';
import './index.less';
// import { array } from 'prop-types';

const { SubMenu } = Menu;

/* 
左侧导航组件
*/
class LeftNav extends Component {

    /* 
        根据指定的menu数据数组生成<MenuItem>和<SubMenu>的数组
        reduce +函数递归
    */
    getMenuNodes2 = (menuList) => {
        /* const arry1 = [1, 2, 3, 4];
        const total = arry1.reduce((preTotal, item) => {//遍历的回调函数：统计，必须返回当次统计的结果
            return preTotal+(item%2===1 ?item:0[])
        }, 0) */


        //请求的路径
        const path = this.props.location.pathname;

        return menuList.reduce((pre, item) => {
            //可能向pre添加<Menu.Item></Menu.Item>
            if (!item.children) {
                pre.push(
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {


                /*
                 判断当前的item的key是否是我需要的openKey
                查找item中的所有的children中的cItem的key，看是否有一个跟请求的path匹配
                */
                const cItem = item.children.find(cItem => cItem.key === path)
                if (cItem) {
                    this.openKey = item.key
                }

                pre.push(
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {
                            this.getMenuNodes2(item.children)
                        }
                    </SubMenu>
                )
            };

            //可能向pre添加<SubMenu>
            return pre;
        }, []);
    };



    /* 
    根据指定的menu数据数组生成<MenuItem>和<SubMenu>的数组
    map +函数递归
    */
    getMenuNodes = (menuList) => {
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                );
            };

            return ( //有下级菜单项
                <SubMenu
                    key={item.key}
                    title={
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </span>
                    }
                >
                    {
                        this.getMenuNodes(item.children)
                    }
                </SubMenu>
            );

        });
    };

    /* 
    第一次render()之后执行一次
    执行异步任务：发ajax请求，启动定时器
    */


    /* 
    第一次render()之前执行一次
    为第一次render()做一些同步的准备工作
    */
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    };
    render() {
        // console.log('left-nav render()');
        const menuNodes = this.getMenuNodes2(menuList);
        //得到当前请求的路由路径
        const selectKey = this.props.location.pathname;
        // console.log('selectKey', selectKey);
        return (
            <div className="left-nav">
                <Link className="left-nav-link" to="/home">
                    <img src={logo} alt="logo" />
                    <h1>后台管理</h1>
                </Link>


                {/* 
                defaultSelectedKeys:总是根据第一次指定的key进行显示   指定默认值后，通过编码更新为其他值。没有更新的效果
                selectedKeys：总是根据最新指定的key进行显示
                
                */}
                <Menu
                    selectedKeys={[selectKey]}
                    defaultOpenKeys={[this.openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        this.menuNodes
                    };
                    {/* <Menu.Item key="/home">
                        <Link to="/home">
                            <Icon type="home" />
                            <span>首页</span>
                        </Link>
                    </Menu.Item>

                    <SubMenu
                        key="/products"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>商品</span>
                            </span>
                        }
                    >
                        <Menu.Item key="/category">
                            <Link to="/category">
                                <Icon type="bars" />
                                <span>品类管理</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/product">
                            <Link to="/product">
                                <Icon type="tool" />
                                <span>商品管理</span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="/user">
                        <Link to="/user">
                            <Icon type="user" />
                            <span>用户管理</span>
                        </Link>
                    </Menu.Item>
                    
                    
                    <Menu.Item key="/role">
                        <Link to="/role">
                            <Icon type="safety-certificate" />
                            <span>订单管理</span>
                        </Link>
                    </Menu.Item>
                 */}
                </Menu>
            </div>
        );
    };
};
/*
 向外暴露 使用withRouter()来包装非路由组件
新组件向LeftNav传递3个特别属性：history、location、match
结果：LeftNav可以操作路由相关语法了
*/
export default withRouter(LeftNav)

/*
2个问题
1、默认选中对应的menuItem
2、有可能需要默认打开某个SubMenu:访问的是某个二级菜单下对应的路径
*/