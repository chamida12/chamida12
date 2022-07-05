
import React from 'react';
import {  Select } from 'antd';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';


const ReportCashBank = () => {
  return (
    <Menu style={{background:"white", width:"1100px", height:"70px"}}  mode="horizontal">

    
    <h4 style={{fontSize:"20px"}}> Reports </h4>
        <Select  style={{margin:"20px",width:"350px",height:"30px"}} 
        placeholder="Please select">
        <option value="Bank Payment"></option>
        <option value="Bank Receipt"></option>
        <option value="Cash Receipt"></option>
        <option value="Laporan Giro Beredar"></option>
        <option value="Laporan Transfer Bank"></option>
        <option value="Petty Cash"></option>
        <option value="Petty Cash Realization"></option>
        <option value="Petty Cash Realization-Perbagian"></option>
        <option value="Petty Cash Transfer"></option>
        <option value="Reminder Transaction"></option>
        </Select>
      
   <Menu.Item key="setting" icon={<SettingOutlined />} style={{marginLeft:"400px"}} className="setting"> Configure Report Layout</Menu.Item>
    
    </Menu>
   
  )
}

export default ReportCashBank;