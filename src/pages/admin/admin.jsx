import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
// import { connect } from "react-redux";

import { Layout } from 'antd';


import LeftNav from '../../components/left-nav';
import Header from '../../components/header-nav';

import Home from '../home/home';
import Category from '../category/category';
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
import Order from "../order/order";
import Product from '../product/product'
import Role from '../role/role';
import User from '../user/user';

const { Footer, Sider, Content } = Layout;

 class Admin extends Component {
    render() {


        return (
            
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header />
                    <Content style={{ background: '#fff', margin:20 }}>
                        <Switch>
                            <Route path="/home" component={Home} />
                            <Route path="/category" component={Category} />
                            <Route path="/product" component={Product} />
                            <Route path="/role" component={Role} />
                            <Route path="/user" component={User} />
                            <Route path="/charts/bar" component={Bar} />
                            <Route path="/charts/pie" component={Pie} />
                            <Route path="/charts/line" component={Line} />
                            <Route path="/order" component={Order} />
                            <Redirect to="/home" ></Redirect>

                        </Switch>
                    </Content>
                    <Footer style={{ textAlign: 'center', color: 'rgba(0,0,0,0.5)' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>

        )
    }
};
export default Admin;