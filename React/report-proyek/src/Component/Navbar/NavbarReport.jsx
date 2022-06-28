
import React from 'react';
import { Cascader } from 'antd';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';



const options = [
{
      value: 'General Journal',
      label: 'General Journal',
     
     
    },
{
     value: 'Petty Cash Transfer',
     label:'Petty Cash Transfer',
    },

{
        value: 'Receipt Voucher',
        label:'Receipt Voucher',
       },
{
        value: 'Payment Voucher Suppiler',
        label:'Payment Voucher Suppiler',
       },

   ];

const onChange = (value) => {
    console.log(value);
    };
const NavbarReport = () => {
  return (
    <Menu style={{background:"white", width:"1120px", height:"70px"}}  mode="horizontal">

    
    <h4 style={{padding:"20px"}}> Reports </h4>
        <Cascader  style={{padding:"15px",width:"350px"}} options={options} onChange={onChange} placeholder="Please select" />
      
   <Menu.Item key="setting" icon={<SettingOutlined />} style={{marginLeft:"400px"}} className="setting"> Configure Report Layout</Menu.Item>
    
    </Menu>
   
  )
}

export default NavbarReport