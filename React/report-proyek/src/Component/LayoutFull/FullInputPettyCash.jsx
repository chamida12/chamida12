import React from "react";
import { Layout } from "antd";


import NavbarPettyCash from "../Navbar/NavbarCashBank";
import { LaporanPettyCash } from "../../pages/Petty Cash/LaporanPettyCash";
import { InputPettyCash } from "../../pages/Petty Cash/InputPettyCash";

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