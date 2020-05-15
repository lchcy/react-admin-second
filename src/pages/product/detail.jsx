import React, { Component } from 'react';
import { Card, Icon, List } from "antd";
import LinkButton from '../../components/link-button';
import { Redirect } from 'react-router-dom';

import memoryUtils from '../../utils/memoryUtils';
// import { BASE_IMG } from '../../utils/Constants';
// import { reqCategory } from "../../api";
const Item = List.Item;

/* 
商品详情路由组件
*/

class ProductDetail extends Component {

    static = {
        categoryName: ''
    };

    // getCategory = async (categoryId) => {
    //     const result = await reqCategory(categoryId);
    //     if (result.status === 0) {
    //         const categoryName = result.data.name;
    //         this.setState({ categoryName })
    //     }
    // };

    // componentDidMount() {
    //     const product = memoryUtils.product;
    //     if (product._id) {
    //         this.getCategory(product.categoryId);
    //     }

    // };

    render() {
        // const { categoryName } = this.state
        const product = memoryUtils.product;

        if (!product) {
            return <Redirect to="/product/"></Redirect>
        };
        const title = (
            <span>
                <LinkButton onClick={() => this.props.history.goBack('/product/home')}>
                    <Icon type="arrow-left"></Icon>
                </LinkButton>
                <span>商品详情</span>
            </span>
        );
        return (
            <Card title={title} className="detail">
                <List>
                    <Item>
                        <span className="detail-left">商品名称</span>
                        <span className="detail-right">{product.name}</span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品描述</span>
                        <span className="detail-right">{product.desc}</span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品价格</span>
                        <span className="detail-right">{product.prize}</span>
                    </Item>
                    <Item>
                        <span className="detail-left">所属分类</span>
                        <span className="detail-right"></span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品图片</span>
                        <span className="detail-right">
                            <img className="detail-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=105712668,2943222324&fm=26&gp=0.jpg" alt="" />
                            <img className="detail-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=105712668,2943222324&fm=26&gp=0.jpg" alt="" />
                            {/* {
                                product.imgs.map(img => <img className="detail-img" key={img} src={BASE_IMG + img} alt="img" />)
                            } */}
                        </span>
                    </Item>
                    <Item>
                        <span className="detail-left">商品详情</span>
                        <span className="detail-right">ccc</span>
                        {/* <div dangerouslySetInnerHTML={{ __html: product.detail }}></div> */}
                    </Item>
                </List>
            </Card>
        )
    }
}
export default ProductDetail