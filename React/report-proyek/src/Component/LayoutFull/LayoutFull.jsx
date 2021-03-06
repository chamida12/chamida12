import React from "react";
import { Layout } from "antd";
import ContentAtas from "../Content/ContentAtas";
import NavbarReportAcounting from "../Navbar/NavbarReportAcounting";

const {  Header,Footer, Sider, Content } = Layout;

const LayoutFull = () => (

    <>
        <Layout>
      <Sider style={{background:"drak"}}>
       
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <NavbarReportAcounting/>
        </Header>
      
        <Content style={{background:"white"}}>
        <ContentAtas/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </>
);

export default LayoutFull;