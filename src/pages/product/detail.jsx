import React, { Component } from 'react'
import { Card, Icon, List } from "antd";
import LinkButton from '../../components/link-button';

const Item = List.Item;

/* 
商品详情路由组件
*/

class ProductDetail extends Component {
    render() {
        const title = (
            <span>
                <LinkButton onClick={() => this.props.history.goBack('/product/home')}>
                    <Icon type="arrow-left"></Icon>
                </LinkButton>
                <span>商品详情</span>
            </span>
        )
        return (
            <Card title={title} className="detail">
                <List>
                    <Item>
                        <span className="detail-left">商品名称</span>
                        <span className="detail-right">abc</span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品描述</span>
                        <span className="detail-right">bbbb</span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品价格</span>
                        <span className="detail-right">888</span>
                    </Item>
                    <Item>
                        <span className="detail-left">所属分类</span>
                        <span className="detail-right">ccc</span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品图片</span>
                        <span className="detail-right">
                            <img className="detail-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=105712668,2943222324&fm=26&gp=0.jpg" alt="" />
                            <img className="detail-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=105712668,2943222324&fm=26&gp=0.jpg" alt="" />
                        </span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品详情</span>
                        <span className="detail-right">ccc</span>
                    </Item>
                </List>
            </Card>
        )
    }
}
export default ProductDetail