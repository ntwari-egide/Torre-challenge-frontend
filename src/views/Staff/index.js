import React, { useState } from 'react'
import Dashboard from '../../components/dashboard-component'
import '../../styles/dashboard.css'
import { Button, Row, Col } from 'antd';
import {  Switch, Space } from 'antd';
import TableComponent from '../../components/Table';
import { Modal, Form, Input } from 'antd';
import { Upload } from 'antd';
import { Select } from 'antd';

const StaffsDashboard = () => {

    const [treeLine, setTreeLine] = React.useState(true);
    const [modelvisible,setmodelvisibility] = useState(false)

    const { Option } = Select;
    

    return (
        <Dashboard  dashboardName="Staffs" active={3}>

            <Modal
            title="Add Company"
            style={{ top: 20 }}
            visible={modelvisible}
            cancelButtonProps = {false}
            centered
            onCancel = {() => setmodelvisibility(false)}
            >
                <Upload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="72" height="72"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" fill="rgba(208,208,208,1)"/></svg>
                    
                </Upload>

                <Form
                    name="normal_login"
                    className="model-form-container"
                    >
                    <Form.Item
                        name="name of company"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input placeholder="Name of the company" />
                    </Form.Item>

                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Select defaultValue="lucy" >
                        <Option style = {{textAlign: 'center'}} className="options" value="jack">Small Company ( 10 - 100 )</Option>
                        <Option style = {{textAlign: 'center'}} value="lucy">Medium Company ( 100 - 1000 )</Option>
                        </Select>
                    </Form.Item>

                    <Button type="primary">ADD</Button>
                </Form>

            </Modal>

            <Row>
                <Col span={16}><Space className="switch-content" direction="vertical">
                <Switch
                    checkedChildren="Employers"
                    unCheckedChildren="Employees"
                    checked={treeLine}
                    onChange={() => setTreeLine(!treeLine)}
                />
            </Space></Col>
            <Col span={8}><Button className="poppins_font table-action-button" onClick={() => setmodelvisibility(true)}>ADD</Button></Col>
            </Row>

            {treeLine ? <TableComponent isPeople={false} /> : <TableComponent isPeople={true} />}

        </Dashboard>
    )
}

export default StaffsDashboard