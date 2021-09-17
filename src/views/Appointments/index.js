import React from 'react'
import CalendarComponent from '../../components/Calendar'
import Dashboard from '../../components/dashboard-component'
import '../../styles/dashboard.css'
import { Typography, Row, Col } from 'antd';
import ActivityComponent from '../../components/Activities/Activity';

const { Title } = Typography;

const { Text } = Typography;

const AppointmentsDashboard = () => {

    let darkmode = window.localStorage.getItem('theme')

    const eventsdata = [
        {
            id: 1,
            icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z" fill="rgba(27,39,175,1)"/></svg>,
            activityname: "General Marketing",
            time: '10 - 11 pm'
        },
        {
            id: 2,
            icon:  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M14 10h-4v4h4v-4zm2 0v4h3v-4h-3zm-2 9v-3h-4v3h4zm2 0h3v-3h-3v3zM14 5h-4v3h4V5zm2 0v3h3V5h-3zm-8 5H5v4h3v-4zm0 9v-3H5v3h3zM8 5H5v3h3V5zM4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="rgba(26,179,116,1)"/></svg>,
            activityname: 'Hosting plan',
            time: '12 - 12:30 pm'
        },
        {
            id: 3,
            icon : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M2 22a8 8 0 1 1 16 0H2zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm7.363 2.233A7.505 7.505 0 0 1 22.983 22H20c0-2.61-1-4.986-2.637-6.767zm-2.023-2.276A7.98 7.98 0 0 0 18 7a7.964 7.964 0 0 0-1.015-3.903A5 5 0 0 1 21 8a4.999 4.999 0 0 1-5.66 4.957z" fill="rgba(27,39,175,1)"/></svg>,
            activityname: "General Marketing",
            time: '10 - 11 pm'
        }

    ]

    return (
        <Dashboard  dashboardName="Appointments" active={2}>
            <Title className={`main-header ${ darkmode === 'dark'? "pure_white_color":"" }`}>Calendar</Title>

            <div className="poppins_font chart-container">
                <CalendarComponent />
            </div>

            <Title className={`margin_top_10 main-header ${ darkmode === 'dark'? "pure_white_color":"" }`}>June main Events</Title>

            <Row  className="contents">
                { eventsdata.map(eventdata =>  <Col span={8}>
                    <ActivityComponent 
                        key={eventdata.id}
                        activitydata =  {eventdata} 
                        hasMargin= {true}
                        />
                    </Col> ) }
            </Row>

        </Dashboard>
    )
}

export default AppointmentsDashboard