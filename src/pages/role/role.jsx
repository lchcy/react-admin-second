import React, { Component } from 'react';
import { Table } from 'antd';
import { data } from "./data";

class role extends Component {
  state = {
    dataSource: [],
    loading: true
  };

  initColumns = () => {
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',

      },
      {
        title: 'Age',
        dataIndex: 'age',
        render: (text) => <span>{text ? text : '-'}</span>

      },
      {
        title: 'Home phone',
        colSpan: 2,
        dataIndex: 'tel',

      },
      {
        title: 'Phone',
        colSpan: 0,
        dataIndex: 'phone',

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
      },
    ]
  }



  componentWillMount() {
    //初始化表头
    this.initColumns();
  };

  componentDidMount() {
    //模拟异步获取数据
    this.getData(1, 10);
  };

  getData = (page, limit) => {
    setTimeout(() => {
      //数据类型转换
      page = Number.parseInt(page);
      limit = Number.parseInt(limit);
      const newData = data.slice((page - 1) * limit, (page - 1) * limit + limit)
      //添加汇总信息
      let sumAge = 0;
      newData.forEach(item => (sumAge += Number.parseInt(item.age)));
      console.log(sumAge);
      let sumTel = 0;
      newData.forEach(item => (sumTel += Number.parseInt(item.phone)))
      const total = {
        key: '-1',
        name: "合计",
        age: sumAge,
        tel: '',
        phone: sumTel,
        address: ''
      }
      newData.unshift(total);
      this.setState({
        dataSource: newData,
        loading: false
      })
    }, 1000)
  }

  handleStandardTableChange = (page, pageSize) => {
    this.setState({
      loading: true
    })
    this.getData(page, pageSize)
    console.log(page, pageSize)//点击事件，点击分页会显示
  };

  render() {
    const { pageSize } = this.props;
    const _pageSize = pageSize + 1;
    const { loading, dataSource } = this.state;
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: _pageSize,
      showTotal: total => `共${total}条`,
      onChange: this.handleStandardTableChange,
      total: data.length
    };
    return (
      <div>
        <Table columns={this.columns}
          dataSource={dataSource}
          pagination={paginationProps}
          bordered
          loading={loading}
        />
      </div>
    );
  };
};

export default role;