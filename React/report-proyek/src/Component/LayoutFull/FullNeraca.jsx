import React from "react";
import { Layout } from "antd";
import { Neraca } from "../../pages/Neraca/Neraca";
import NavbarReportAcounting from "../Navbar/NavbarReportAcounting";


const {  Header,Footer, Sider, Content } = Layout;

const FullNeraca = () => (

    <>
        <Layout>
      <Sider style={{background:"drak"}}>
       
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <NavbarReportAcounting/>
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