import React from "react";
import { Layout } from "antd";
import NavbarReport from "../Navbar/NavbarReport";
import { Neraca } from "../../pages/Neraca/Neraca";


const {  Header,Footer, Sider, Content } = Layout;

const FullNeraca = () => (

    <>
        <Layout>
      <Sider style={{background:"drak"}}>
       
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <NavbarReport/>
        </Header>
      
        <Content style={{background:"white"}}>
        <Neraca/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </>
);

export default FullNeraca;