import React, { Component } from 'react'
import { Pagination } from 'antd';


function onChange(pageNumber,pageSize) {
    console.log('Page: ', pageNumber);
    console.log( pageSize);
  }
export default class Order extends Component {
    render() {
        return (
            <div>
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
                <br />
                <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} disabled />
            </div>
        )
    }
}
