import React,{useState} from "react"
import { Row, Col, Divider } from 'antd';
import 'antd/dist/antd.css';
import './login.css'
import Logo from '../../assets/lot-logo.svg'
import { Form, Input, Button, Checkbox } from 'antd';
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
                    <h1 className="dark_blue_color mb-3">Create Account</h1>
                    <p className="mt-3">We’re glad you are back! Now fill in the details to get started</p>

                    <Divider />
                    {/* start of signup form content */}

                    <Form className="form-content medium_darl_black_color"
                        form={form}
                        layout="vertical"
                        dependencies={['password']}
                        >
                        
                        <Form.Item 
                        label="Full Name*" 
                        required 
                        // tooltip="This is a required field"
                        >
                            <Input className="inputs" placeholder="Kamikazi Lilian" />
                        </Form.Item>

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

                        <Form.Item name="remember" valuePropName="checked" >
                            <Checkbox>I agree to terms and Conditions</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button className="submit-button">Create Account</Button>
                        </Form.Item>
                        </Form>
                        <Divider className="poppins_font divider" plain> Or </Divider>

                        <Row className="signup-form-google">
                            <Col span={4}> 
                                <img height="50" src="https://img.icons8.com/color/48/000000/google-logo.png"/>
                            </Col> 
                            <Col span={12}> 
                                <h6 className="text-center">Sign Up With Google</h6>
                            </Col> 
                        </Row>

                        <p className="goto-link poppins_font text-center">Already Have An Account? <Link to={'/signup'}> Signin</Link> </p>
                    {/* end of signup form content */}

                </Col>
            </Row>
        </>
    )
}

export default SignupComponent