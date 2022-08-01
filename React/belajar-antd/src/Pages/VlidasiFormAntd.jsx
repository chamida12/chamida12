import { Button, Card, Checkbox, Form, Input, Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import { MailTwoTone,LockTwoTone } from '@ant-design/icons';
import { useNavigate} from 'react-router-dom';
import { getUser,postUserPassword } from './ApiForm';
import { useEffect, useState } from 'react';

import { userRegistration } from '../services';


const ValidasiFormAntd = () => {
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
    const navigate = useNavigate()
    const [massage,setMessage]= useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    console.log(email,password,setEmail,setPassword);
  
    const disabler = email === "" || password === "" ? true : false;
    
    useEffect(()=>{
        // getUser(setListUser);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[massage]);

  return (
    <div style={{background: "#F0F8FF",height: "100vh"}}>
        <Layout>
            <Header style={{background:"#4682B4"}}>
              <div>
                  <tg style={{marginLeft:"700px",marginTop:"3px"}}>Already have a Finansial Acounting Acount?
                  <a href='/signIn' style={{color:'Highlight'}}> Sign In</a>
                  </tg> 
              </div>
            </Header>
            <Content>
            <div style={{padding:"30px",background: "#F0F8FF"}}>
                <Card style={{width:"700px",margin:"auto",height:"500px",padding:"30px",boxShadow:" 1px 1px 3px grey"}}>
                  <div style={{padding:"15px"}}>
                  <p style={{textAlign:"center",fontSize:"20px"}}> Experience Finansial Acounting for FREE</p>
                  <br/>

                  <Form
                    name="basic"
                    labelCol={{
                      span: 8,
                    }}
                    wrapperCol={{
                      span: 16,
                    }}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      
                      name="Email"
                      rules={[
                        {
                          required: true,
                          message: 'Email Address required!',
                        },
                        {
                          pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          // required: true,
                          message: 'Not a valid Email Address!',
                        }
                      ]}
                    >
                      <Input type={"email"} placeholder="Email" style={{height:"50px",width:"580px"}} 
                        prefix={<MailTwoTone   
                        style={{fontSize:"20px",textIndent:"4px"}}/>}
                        value={email} 
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}  />
                    </Form.Item>
                    <br/>

                    <Form.Item
                      
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                    >
                      <Input.Password type={"password"} placeholder="Password" style={{height:"50px",width:"580px"}} 
                      prefix={<LockTwoTone 
                      style={{fontSize:"20px",textIndent:"4px"}}/>}
                      value={password} 
                            onChange={(e)=>{
                              setPassword(e.target.value)
                                }}/>
                    </Form.Item>
                    <p style={{textAlign:"center"}}> Your data will be in US data center</p>

                    <Form.Item
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{
                        offset: 4,
                        span: 16,
                      }}
                    >
                      <Checkbox>I agree to the Terms of Service and Privacy Policy</Checkbox>
                    </Form.Item>

                    <Form.Item
                      wrapperCol={{
                        span: 16,
                      }}
                    >
                      <Button 
                      type="primary" 
                      htmlType="submit" 
                      style={{width:"580px",height:'50px'}} 
                      disabled={disabler}
                      onClick={()=>{
                        userRegistration(email, password, navigate)
                        // postUserPassword(email,password,setEmail,setPassword,setMessage,setIsEditing)
                        // navigate("/kelengkapanData");
                      }}
                        >
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
              </div>
            </Card>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ValidasiFormAntd;