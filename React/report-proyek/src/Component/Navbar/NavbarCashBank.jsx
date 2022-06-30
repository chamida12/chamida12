
import React from 'react';
import { Cascader } from 'antd';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';



const options = [
{
      value: 'Bank Payment',
      label: 'Bank Payment',
     
     
    },
{
     value: 'Bank Receipt',
     label:'Bank Receipt',
    },

{
        value: 'Cash Payment',
        label:'Cash Payment',
       },
{
        value: 'Cash Receipt',
        label:'Cash Receipt',
       },
{
        value: 'Laporan Giro Beredar',
        label:'Laporan Giro Beredar',
       },
{
        value: 'Laporan Transfer Bank',
        label:'Laporan Transfer Bank',
       },
{
        value: 'Petty Cash',
        label:'Petty Cash',
       },
{
        value: 'Petty Cash Realization',
        label:'Petty Cash Realization',
       },
{
        value: 'Petty Cash Realization-Perbagian',
        label:'Petty Cash Realization-Perbagian',
       },
{
        value: 'Petty Cash Transfer',
        label:'Petty Cash Transfer',
       },
{
        value: 'Reminder Transaction',
        label:'Reminder Transaction',
       },


   ];

const onChange = (value) => {
    console.log(value);
    };
const ReportCashBank = () => {
  return (
    <Menu style={{background:"white", width:"1100px", height:"70px"}}  mode="horizontal">

    
    <h4 style={{fontSize:"20px"}}> Reports </h4>
        <Cascader  style={{padding:"15px",width:"350px"}} options={options} onChange={onChange} placeholder="Please select" />
      
   <Menu.Item key="setting" icon={<SettingOutlined />} style={{marginLeft:"400px"}} className="setting"> Configure Report Layout</Menu.Item>
    
    </Menu>
   
  )
}

export default ReportCashBank;