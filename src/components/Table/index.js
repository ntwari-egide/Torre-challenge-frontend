import React, { useState } from 'react'
import { Table } from 'antd';
import { Image } from 'antd';
import "../../styles/dashboard.css"
import { Typography, Space } from 'antd';
import { Rate,Row,Col } from 'antd';
import { Modal} from 'antd';
import { Button } from 'antd';
import { Select } from 'antd';

const { Text, Title } = Typography;


const TableComponent = (props) => {

    const [modelvisible,setmodelvisibility] = useState(false)
    const { Option } = Select;

    const columns = [
  {
    title: 'Name',
    dataIndex: 'name',    
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '5%',
    render: text => <Image className="table-pic-img"
      width={200}
      src={ `${props.isPeople? 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260': 'https://telecomdrive.com/wp-content/uploads/2019/09/MTN-logo.jpg'}`}
    />,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width:  '30%',
    sorter: (a, b) => a.age - b.age,
    render: text => <Text className="table_name">{props.isPeople? 'Kamikazi Lilian' :'MTN Rwanda'}</Text>
  },
  {
    title: 'Address',
    dataIndex: 'address',
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '30%',
    render: text => props.isPeople? '':<Rate defaultValue={3} />
  },
  {
    title: 'Button',
    dataIndex: 'button',
    width: '20%',
    render: text => <a className="rate-button-table" onClick={()=> setmodelvisibility(true)}>{props.isPeople? 'MTN' :'Rate'}</a>,
  },
    {
    title: 'actions',
    width: '40%',
    render: number => <Row>
        <Col><svg className="cursor_pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" fill="rgba(173,181,255,1)"/></svg></Col>

        <Col className="margin_left_10 cursor_pointer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 7v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7H2V5h20v2h-2zm-9 3v7h2v-7h-2zM7 2h10v2H7V2z" fill="rgba(173,181,255,1)"/></svg></Col>
    </Row>
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: '',
    actions: '',
  },
   {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: '',
    actions: '',
  },
  , {
    key: '3',
    name: 'John Brown',
    age: 32,
    address: '',
    actions: '',
  },
   {
    key: '4',
    name: 'John Brown',
    age: 32,
    address: '',
    actions: '',
  },
     {
    key: '5',
    name: 'John Brown',
    age: 32,
    address: '',
    actions: '',
  }
  ,   {
    key: '6',
    name: 'John Brown',
    age: 32,
    address: '',
    actions: '',
  }
];


    return (
    <>
        <Modal
            title="Rate company"
            style={{ top: 20 }}
            visible={modelvisible}
            cancelButtonProps = {false}
            className="rate-model"
            centered
            onCancel = {() => setmodelvisibility(false)}
            >
                <Image className="company-pic-img"
                width={200}
                src={ `https://logodix.com/logo/1860908.jpg`}
                />

                <Title className="poppins_font">MTN Rwanda</Title>
                <Title level={5}>To rate this company you will First choose the stars and save By clicking “rate”</Title>

                <Space className="margin_top-10" direction={'horizontal'}>
                  <Text className="poppins_font rates">Rate</Text>  <Rate />
                </Space>

                <Space><Button className="add-rate-button" type="primary">Rate</Button></Space>

            </Modal>
            <Table className="staff-table text-center dark_hard_blue_color " columns={columns} dataSource={data} />
            </>
    )
}

export default TableComponent