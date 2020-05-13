import React, { Component } from 'react'
import { Table } from 'antd';

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
/* 
用户管理
*/
class User extends Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
    };

    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };

    // 所有同步操作
    componentWillMount() {
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                render: (text, record, index) => {
                    if (record.totalIndex == '合计') {
                        return text;
                    } else {
                        return ++index;
                    }
                }
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Address',
                dataIndex: 'address',
                render: (text, record) => {
                    if (record.totalIndex) {
                        return '';
                    } else {
                        return text || '--';
                    }
                }
            }];
    }

    // 所有异步操作
    componentDidMount() {

    }

    /**
     * 1.  id 班级 年龄  性别
     */
    /*    async getUserDateOfPage() {
           setTimeout(() => {
               let sumAge = 0;
               const userList = [];
   
               userList.forEach(age => sumAge + age)
               userList.pop({
                   id: "合计",
                   class: "",
                   age: sumAge,
                   sex: ""
               })
               // 返回10条数据
               this.setState({
                   userList
               })
           }, 1000);
       }
    */

    /**
     * 1. 后台异步数据获取需要修改为后端分页
     * 2. 
     */
    handleStandardTableChange = (page, pageSize) => {
        console.log(page, pageSize);
        // getUserDateOfPage(page, pageSize);
    }

    render() {

        const { selectedRowKeys } = this.state;

        const paginationProps = {
            showSizeChanger: true,
            showQuickJumper: true,
            // total: pagination.data,
            pageSize: Number.parseInt(this.state.pageSize),
            //current: Number.parseInt(this.state.pageNum),
            showTotal: total => `共${total}条`,
            onChange: this.handleStandardTableChange
        }
        return <Table
            //rowSelection={rowSelection}
            rowKey={val => val.projectId}
            // dataSource={this.state.prolist}
            pagination={paginationProps}
            columns={this.columns}
            dataSource={[]} />;
    }
}

export default User;