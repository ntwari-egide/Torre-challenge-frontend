import React from "react"
import Dashboard from "../../components/dashboard-component"
import { Typography,Row,Col, Space,DatePicker } from 'antd';
import StudentTableComponent from "../../components/Table/student";

const { Title } = Typography;

const { Text } = Typography;

const ReportComponent = () => {
    let darkmode = window.localStorage.getItem('theme')

    return (
        <Dashboard dashboardName="Reports" active={4}>

            <Row>
                <Col span={14}><Title className={`main-header ${ darkmode === 'dark'? "pure_white_color":"" }`}>Students rate</Title></Col>
                <Col span={10}>

                    <Space direction="horizontal" className="choose-date-container">
                        <Text className="dark_blue_color font_weight_normal">From</Text> 
                        <DatePicker />
                        <Text className="margin_left_10 font_weight_normal dark_blue_color">To</Text> <DatePicker />
                    </Space>

                </Col>
            </Row>

            <Space className="margint_top_10">
                <StudentTableComponent />
            </Space>

        </Dashboard>
    )
}

export default ReportComponent