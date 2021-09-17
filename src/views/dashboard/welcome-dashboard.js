import React,{useEffect} from "react"
import { Col, Row } from 'antd';
import { Bar } from "nivo";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Dashboard from "../../components/dashboard-component";
import { Typography } from 'antd';

const { Title } = Typography;

const { Text } = Typography;

const WelcomeDashboard = () => {

    let darkmode = window.localStorage.getItem('theme')

    const data = [
        {
            name: 'Text',
            uv: 3490,
            pv: 0,
            amt: 2100,
        },
        {
            name: 'Text',
            uv: 4000,
            pv: 12,
            amt: 2400,
        },
        {
            name: 'Text',
            uv: 3000,
            pv: 23,
            amt: 2210,
        },
        {
            name: 'Text',
            uv: 2000,
            pv: 14,
            amt: 2290,
        },
        {
            name: 'Text',
            uv: 2780,
            pv: 56,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Text',
            uv: 2390,
            pv: 71,
            amt: 2500,
        },
        {
            name: 'Text',
            uv: 3490,
            pv: 34,
            amt: 2100,
        },
        {
            name: 'Text',
            uv: 3490,
            pv: 14,
            amt: 2100,
        },
            {
            name: 'Text',
            uv: 3490,
            pv: 14,
            amt: 2100,
        },
            {
            name: 'Text',
            uv: 3490,
            pv: 23,
            amt: 2100,
        },
            {
            name: 'Text',
            uv: 3490,
            pv: 0,
            amt: 2100,
        }
    ];

    const newdata = [
        {
            id: "A",
            students: 13
        },
        {
            id: "B",
            students: 35
        },
        {
            id: "C",
            students: 40
        },
        {
            id: "D",
            students: 23
        },
        {
            id: "E",
            students: 25
        },
        {
            id: "F",
            students: 25
        },
        {
            id: "G",
            students: 12
    }]

    

    return (
      <Dashboard dashboardName="Overview" active={1}>
          
                <Title className={`main-header ${ darkmode === 'dark'? "pure_white_color":"" }`}>Welcome to <strong>Lot,</strong></Title>

                    <div className="poppins_font chart-container">
                        <Title level={3} className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Success Map</Title>

                        <ResponsiveContainer width="100%" height="90%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                            }}
                            >
                        <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend>Success Map </Legend>
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <Row>
                        <Col className="summary-container dark_blue_backgroun" span={8}>
                            <Title level={4} className="pure_white_color">EMPLOYERS</Title>
                            <Title level={2} className="light_green_color">36</Title>
                            <Text className="pure_white_color">Employers finds their employees through us</Text>
                        </Col>
                        <Col className="summary-container dark_blue_backgroun this" span={7}>
                            <Title level={4} className="pure_white_color">EMPLOYERS</Title>
                            <Title level={2} className="light_green_color">36</Title>
                            <Text className="pure_white_color">Employers finds their employees through us</Text>
                        </Col>
                        <Col className="summary-container dark_blue_backgroun this" span={7}>
                           <Title level={4} className="pure_white_color">EMPLOYERS</Title>
                            <Title level={2} className="light_green_color">36</Title>
                            <Text className="pure_white_color">Employers finds their employees through us</Text>
                        </Col>
                        
                    </Row>

                    <div className="poppins_font chart-container chart-container-2">

                        <Title level={3} className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Student Rates</Title>

                        <Bar
                            data={newdata}
                            keys={["students"]}
                            colors={[darkmode === 'dark'? '#00FFEB': '#0028AF']}
                            width={450}
                            height={320}
                            padding={0.5}
                            margin={{
                                top: 30,
                                right: 0,
                                bottom: 50,
                                left: 50
                            }}
                            enableLabel={false}
                            enableGridY={true}
                        />
                </div>
      </Dashboard>
    )
}

export default WelcomeDashboard