import React from "react"
import { Col, Row } from 'antd';
import { theme } from "../dashboard-component";



const ActivityComponent = (props) => {

    let darkmode = window.localStorage.getItem('theme')

    return (
        <Row className={`container ${props.hasMargin ? 'no_margin_left': ''} ${darkmode === 'dark'? 'bg_transparent': ''}`}>
            <Col span={4} >
                {props.activitydata.icon}
            </Col>
            <Col span={18}>
                <p className={`action-type`}>{props.activitydata.activityname}</p>
                <p className="action-time">{props.activitydata.time}</p>
            </Col>
            <Col span={2}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 14c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="rgba(203,203,203,1)"/></svg></Col>
        </Row>
    )
}

export default ActivityComponent