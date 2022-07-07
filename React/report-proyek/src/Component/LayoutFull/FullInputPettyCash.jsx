import React from "react";
import { Layout } from "antd";


import NavbarPettyCash from "../Navbar/NavbarCashBank";
import { InputPettyCash } from "../../pages/Cash Bank/Petty Cash/InputPettyCash";


const {  Header,Footer, Sider, Content } = Layout;

const FullInputPettyCash = () => (

    <>
        <Layout>
      <Sider style={{background:"drak"}}>
       
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <NavbarPettyCash/>
        </Header>
      
        <Content style={{background:"white"}}>
        <InputPettyCash/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </>
);

export default FullInputPettyCash;