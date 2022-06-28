import React from "react";
import { Layout } from "antd";
import NavbarReport from "../Navbar/NavbarReport";
import ContentAtas from "../Content/ContentAtas";

const {  Header,Footer, Sider, Content } = Layout;

const LayoutFull = () => (

    <>
        <Layout>
      <Sider style={{background:"drak"}}>
       
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <NavbarReport/>
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