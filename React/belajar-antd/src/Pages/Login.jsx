import React, { useState } from 'react';
import { Content } from 'antd/lib/layout/layout';
import Card from 'antd/lib/card/Card';
import { Input,Button } from 'antd';
import { MailTwoTone,LockTwoTone } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { LoginProfil } from '../services';

const Login=()=> {
  const navigate= useNavigate()
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");
  return (
    <div>
      <Content>
              <div style={{padding:"30px",background: "#F0F8FF"}}>
                <Card style={{width:"500px",margin:"auto",height:"500px",padding:"30px",boxShadow:" 1px 1px 3px grey"}}>
                  <div style={{padding:"15px"}}>
                  <p style={{textAlign:"center",fontSize:"20px"}}> Finansial Acounting</p>

                  <Input type={"email"} placeholder="Email" style={{height:"50px"}} 
                  prefix={<MailTwoTone   
                  style={{fontSize:"20px",textIndent:"4px"}}/>}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                }} />
                  <br/>
                  <br/>
                  <Input.Password type={"password"} placeholder="Password" style={{height:"50px"}} 
                  prefix={<LockTwoTone 
                  style={{fontSize:"20px",textIndent:"4px"}}/>} />
                  </div>
                  
                  <Button style={{margin:"15px",width:"385px",height:'50px'}} type="primary" onClick={()=> {navigate("/tampilansignin")}}>
                    LOGIN
                  </Button>
                  <div>
                    <a href='/signUp'>Don't have an account?</a>
                    
                  </div>
                </Card>
              </div>

            </Content>
    </div>
  )
}

export default Login