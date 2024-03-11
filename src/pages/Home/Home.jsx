import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Divider, Table } from 'antd';
import './Home.css'

const columns = [
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  }
];


const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/categories").then(res => setData(res.data))
    console.log(data)
  }, [])

  return (
    <div className='content'>
      <Divider>Table</Divider>
    <Table columns={columns} dataSource={data} rowKey="id" size="small" pagination={{ defaultPageSize: 4, showSizeChanger: true, pageSizeOptions: ['2', '4', '12']}} />
    {/* scroll={{ x: 1500, y: 300 }} */}
    </div>
  )
}

export default Home