import React, { Component } from 'react';
import { Table } from 'antd';
// import { Pagination } from 'antd';s

const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};



const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  }, {
    key: '',
    name: '合计',
    age: '',
    tel: '',
    phone: '',
    address: '',
  },
];

class role extends Component {
  changePagination = pagination => {

  };

  componentWillMount() {
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        // render: (text, record, index) => {
        //   if (record.totalIndex == '合计') {
        //     return text;
        //   } else {
        //     return ++index;
        //   }
        // }

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
  componentDidMount() {

  }

  handleStandardTableChange = (page, pageSize) => {
    console.log(page, pageSize)
  }

  render() {
    const { pageSize } = this.props
    const _pageSize = pageSize + 1

    const paginationProps = {

      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: _pageSize,
      showTotal: total => `共${total}条`,
      onChange: this.handleStandardTableChange
    }
    return (
      <div>
        <Table columns={this.columns}
          dataSource={data}
          pagination={paginationProps}
          onChange={this.changePagination}
          bordered

        />
      </div>

    );
  }
}

export default role;