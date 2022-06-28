import React from "react";
import { Layout } from "antd";


const {  Header,Footer, Sider, Content } = Layout;

const Coba = () => (

    <>
        <Layout>
      <Sider style={{background:"white"}}>

      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
       
        </Header>
        <Header>
        
        </Header>
        <Content style={{background:"white"}}>
        
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </>
);

export default Coba;