import React,{useEffect,useState} from "react"
import { Layout, Menu, Breadcrumb, Col, Row, Input,Slider, Carousel } from 'antd';
import { Bar } from "nivo";
import { useMediaQuery } from 'react-responsive'
import "./dashboard.css"
import HomeSvg from "../../assets/Icon ionic-md-home.svg"
import AppointmentSvg from '../../assets/Icon ionic-ios-calendar.svg'
import StaffIcon from '../../assets/Icon awesome-user-alt.svg'
import ReportsIcon from '../../assets/article_black_24dp.svg'
import SettingsIcon from  '../../assets/Icon material-settings.svg'
import ProfilePic from '../../assets/profile-pic.png'
import HideIconOn from '../../assets/hide.png'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const WelcomeDashboard = () => {

    const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
        query: "(max-device-width: 600px)"
    });

    const isTabletDevice = useMediaQuery({
        query: "(min-device-width: 768px)",
    });

    const isLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
    });

    const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
    });

    const isBigScreen = useMediaQuery({
        query: "(min-device-width: 1201px )",
    });

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

    const [collapsed,setcollapsed] = useState(false)

    const [darkmode,setdarkmode] = useState('light')

    const themechange = () => {
        if(darkmode === 'dark') setdarkmode('light')
        if(darkmode === 'light') setdarkmode('dark')
    }

    const onCollapse = collapsed => {
        setcollapsed(onCollapse)
    };

    const collapsedChange = () => { setcollapsed(!collapsed)}

    useEffect(() =>  {if(isMobileDevice) setcollapsed(true)})

    return (
      <Layout style={{ minHeight: '100vh' }} className="euclid_circular_b_font">
        <Sider theme={'darkmode'} className={`dashboard-sidebar-routes ${ darkmode === 'dark'? "dark_mode_background":"" }`} trigger={null} collapsible width={250} collapsed={collapsed} onCollapse={onCollapse}>

            {/* profile pic  */}
          
            <div className={`profile-pic ${ darkmode === 'dark'? "dark_mode_background":"" }`} >
                {collapsed ?
                <Row>
                    <Col> <img src={ProfilePic}/></Col>
                </Row>: 
                <Row>
                    <Col> <img src={ProfilePic}/></Col>
                    <Col>
                        <p className="username">Dr Simmons M.</p>
                        <p className="role">Admin</p>
                    </Col>
                </Row>}
            </div>
          
            <Menu theme={darkmode} defaultSelectedKeys={['1']} mode="inline">
                
                <Menu.Item className="light_green_color dashboard-links" key="1" icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-9-7v6h2v-6h-2z" fill="rgba(255,255,255,1)"/></svg>}>
                Home
                </Menu.Item>
                
                <Menu.Item key="2" className="dashboard-links dark_blue_color font-weight-medium" icon={ darkmode === 'dark'? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2z" fill="rgba(255,255,255,1)"/></svg> : <img class="dashboard-navbar-icon " src={AppointmentSvg}/>}>
                Appointments
                </Menu.Item>

                <Menu.Item key="3" className="dashboard-links dark_blue_color font-weight-medium" icon={ darkmode === 'dark'? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" fill="rgba(255,255,255,1)"/></svg> : <img class="dashboard-navbar-icon " src={StaffIcon}/>}>
                Staff
                </Menu.Item>

                <Menu.Item key="4" className="dashboard-links dark_blue_color font-weight-medium" icon={darkmode === 'dark'? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM8 7v2h8V7H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z" fill="rgba(255,252,252,1)"/></svg> :  <img class="dashboard-navbar-icon " src={ReportsIcon}/>}>
                Reports
                </Menu.Item>

                <Menu.Item key="5" className="dashboard-links dark_blue_color font-weight-medium" icon={darkmode === 'dark'? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2.132 13.63a9.942 9.942 0 0 1 0-3.26c1.102.026 2.092-.502 2.477-1.431.385-.93.058-2.004-.74-2.763a9.942 9.942 0 0 1 2.306-2.307c.76.798 1.834 1.125 2.764.74.93-.385 1.457-1.376 1.43-2.477a9.942 9.942 0 0 1 3.262 0c-.027 1.102.501 2.092 1.43 2.477.93.385 2.004.058 2.763-.74a9.942 9.942 0 0 1 2.307 2.306c-.798.76-1.125 1.834-.74 2.764.385.93 1.376 1.457 2.477 1.43a9.942 9.942 0 0 1 0 3.262c-1.102-.027-2.092.501-2.477 1.43-.385.93-.058 2.004.74 2.763a9.942 9.942 0 0 1-2.306 2.307c-.76-.798-1.834-1.125-2.764-.74-.93.385-1.457 1.376-1.43 2.477a9.942 9.942 0 0 1-3.262 0c.027-1.102-.501-2.092-1.43-2.477-.93-.385-2.004-.058-2.763.74a9.942 9.942 0 0 1-2.307-2.306c.798-.76 1.125-1.834.74-2.764-.385-.93-1.376-1.457-2.477-1.43zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" fill="rgba(255,255,255,1)"/></svg> : <img class="dashboard-navbar-icon " src={SettingsIcon}/>}>
                Settings
                </Menu.Item>


                {collapsed && darkmode === 'dark'? 
                 <svg onClick={collapsedChange} className="hide-icon-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(255,255,255,1)"/></svg> : collapsed && darkmode == 'light' ? <svg onClick={collapsedChange} className="hide-icon-on" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" fill="rgba(27,39,175,1)"/></svg> : !collapsed && darkmode === 'dark'? 
                 <Row onClick={collapsedChange} className="hide-icon-on">
                     <Col><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" fill="rgba(255,255,255,1)"/></svg></Col>
                     <Col><p style={{marginTop: '0.9em'}}>Hide</p></Col>
                </Row>
                 : <img onClick={collapsedChange} className="hide-icon-on" src={HideIconOn} />}
                
            </Menu>
            </Sider>
            <Layout className={`site-layout ${ darkmode === 'dark'? "dark_mode_background":"" }`}>
                <Header theme={darkmode} className={`site-layout-background dashboard-header ${ darkmode === 'dark'? "dark_mode_background":"" }`} style={{ padding: 0 }} >
                    <Row >
                        <Col span={8}> <h1 className={`dark_blue_color ${ darkmode === 'dark'? "light_green_color":"" }`}>Overview</h1> </Col>
                        <Col><Input className="search-input dark" size="large" placeholder="Search for patient" prefix={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z" fill="rgba(203,203,203,1)"/></svg>} /></Col>
                        <Col className="action-menu">
                            <Row>
                                <Col span={8}>

                                    {darkmode === 'dark' ? <svg  onClick={themechange} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" fill="rgba(255,255,255,1)"/></svg>: <svg onClick={themechange} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z"/></svg> }

                                </Col>

                                <Col>
                                    {darkmode === 'dark'? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z" fill="rgba(255,255,255,1)"/></svg>: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"/></svg>}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Row>
                        <Col className={`dash-center-content-right ${ darkmode === 'dark'? "dark_mode_background":"" }`} span={18}>
                            <h1 className={`main-header ${ darkmode === 'dark'? "pure_white_color":"" }`}>Welcome to <strong>Lot,</strong></h1>

                            <div className="poppins_font chart-container">

                                <h3 className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Success Map</h3>

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
                                    <h4 className="pure_white_color">EMPLOYERS</h4>
                                    <h2 className="light_green_color">36</h2>
                                    <p className="pure_white_color">Employers finds their employees through us</p>
                                </Col>
                                <Col className="summary-container dark_blue_backgroun this" span={7}>
                                    <h4 className="pure_white_color">EMPLOYERS</h4>
                                    <h2 className="light_green_color">36</h2>
                                    <p className="pure_white_color">Employers finds their employees through us</p>
                                </Col>
                                <Col className="summary-container dark_blue_backgroun this" span={7}>
                                    <h4 className="pure_white_color">EMPLOYERS</h4>
                                    <h2 className="light_green_color">36</h2>
                                    <p className="pure_white_color">Employers finds their employees through us</p>
                                </Col>
                            </Row>

                            <div className="poppins_font chart-container chart-container-2">

                                <h3 className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Student Rates</h3>

                                <Bar
                                    data={newdata}
                                    keys={["students"]}
                                    colors={[darkmode == 'dark'? '#00FFEB': '#0028AF']}
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

                        </Col>
                        <Col span={6} className="dash-center-content-left">
                                                    
                            <Carousel className="semi_dark_black_background date-picker" autoplay dots={false}>
                                <div>
                                <h3 className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Yesterday</h3>
                                </div>
                                <div>
                                <h3 className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Today, 10 June</h3>
                                </div>
                                <div>
                                <h3 className={`${ darkmode === 'dark'? "pure_white_color":"" }`}>Tomorrow</h3>
                                </div>
                            </Carousel>

                            <div className="contents">
                                <Row className="container">
                                    <Col span={4} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z" fill="rgba(27,39,175,1)"/></svg>
                                    </Col>
                                    <Col span={18}>
                                        <p className="action-type">General meeting</p>
                                        <p className="action-time">10 - 11 pm</p>
                                    </Col>
                                    <Col span={2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(203,203,203,1)"/></svg></Col>
                                </Row>

                                <Row className="container">
                                    <Col span={4} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8 5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(26,179,116,1)"/></svg>
                                    </Col>
                                    <Col span={18}>
                                        <p className="action-type">Uni Marketing</p>
                                        <p className="action-time">10 - 11 pm</p>
                                    </Col>
                                    <Col span={2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(203,203,203,1)"/></svg></Col>
                                </Row>

                                <Row className="container">
                                    <Col span={4} >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z" fill="rgba(27,39,175,1)"/></svg>
                                    </Col>
                                    <Col span={18}>
                                        <p className="action-type">General meeting</p>
                                        <p className="action-time">10 - 11 pm</p>
                                    </Col>
                                    <Col span={2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(203,203,203,1)"/></svg></Col>
                                </Row>
                                
                            </div>
                        </Col>
                    </Row>
                </Content>
                {/* <Footer style={{ textAlign: 'center' }}>Task force 3 ©2020 Created by Egide Ntwari</Footer> */}
            </Layout>
        </Layout>
    )
}

export default WelcomeDashboard