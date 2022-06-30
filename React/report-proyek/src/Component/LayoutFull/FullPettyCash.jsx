import React from "react";
import { Layout } from "antd";


import NavbarPettyCash from "../Navbar/NavbarCashBank";
import { LaporanPettyCash } from "../../pages/Petty Cash/LaporanPettyCash";

const {  Header,Footer, Sider, Content } = Layout;

const FullPettyCash = () => (

    <>
        <Layout>
      <Sider style={{background:"drak"}}>
       
      </Sider>
      <Layout>
        <Header style={{background:"white"}}>
        <NavbarPettyCash/>
        </Header>
      
        <Content style={{background:"white"}}>
        <LaporanPettyCash/>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    </>
);

export default FullPettyCash;