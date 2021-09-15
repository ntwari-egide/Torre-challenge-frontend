import React,{useState} from "react"
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './login.css'
import Logo from '../../assets/lot-logo.svg'
import { Form, Input, Button, Radio } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


const SignupComponent = () => {

  const [form] = Form.useForm();
 


    return (
        <>
            <Row className="login-container">
                <Col className="left-side" span={12} sm={24} md={12}>
                    <img src={Logo}/>
                    <h1 className="poppins_font pure_white_color">“Let the countdown begin”</h1>
                </Col>
                <Col className="gutter-row poppins_font main-content" span={24} sm={24} md={12}>
                    <h1 className="dark_blue_color mb-3">Log In</h1>
                    <p className="mt-3">We’re glad you are back! Now fill in the details And dive in</p>

                    <Divider />
                    {/* start of login form content */}

                    <Form className="form-content medium_darl_black_color"
                        form={form}
                        layout="vertical"
                        dependencies={['password']}
                        >
                        
                        <Form.Item 
                        label="Email*" 
                        required 
                        // tooltip="This is a required field"
                        >
                            <Input className="inputs" placeholder="Kamikazililian@gmail.com" />
                        </Form.Item>

                        <Form.Item
                            label="Enter Password*"
                            name="password"
                        >
                            <Input.Password className="inputs" placeholder="***********" />
                        </Form.Item>

                        <p className="red_color italic font-bold forgot-pass">Forgot password?</p>

                        <Form.Item>
                            <Button className="submit-button">Submit</Button>
                        </Form.Item>
                        </Form>

                        <p className="goto-link poppins_font text-center">Don't have an account? <Link>Signup</Link> </p>

                    {/* end of loin form content */}

                </Col>
            </Row>
        </>
    )
}

export default SignupComponent