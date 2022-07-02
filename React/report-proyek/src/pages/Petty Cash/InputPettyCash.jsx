





import { Button, Card, Form, Input, Select } from "antd";
import React from "react";
import './InputPettyCash.css'
import { useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";
import { Option } from "antd/lib/mentions";


export const InputPettyCash = () => {
    const navigate = useNavigate ()
    

return(
    <div>
        <div>
            <p style={{textAlign:"center",fontWeight:"bold",fontSize:15,padding:"50px"}}> PETTY CASH </p>
             <Card style={{margin:"auto",width:"1000px"}}>
                 <div>
                     <Form>
                         <div>
                            <FormItem style={{fontWeight:"bold",margin:"30px"}} label="No Akun">
                                <Input style={{width:"600px",marginLeft:"150px"}} /> 
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nama Akun">
                                <Input style={{width:"600px",marginLeft:"135px"}} />
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nominal">
                                <Input style={{width:"600px",marginLeft:"150px"}}/>
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Keterangan">
                                <Input style={{width:"600px",marginLeft:"135px"}}/>
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Periode">
                                <Select style={{width:"600px",marginLeft:"155px"}}>
                                    <Option> Januari </Option>
                                    <Option> Februari </Option>
                                    <Option> Maret </Option>
                                    <Option> April </Option>
                                    <Option> Mei </Option>
                                    <Option> Juni </Option>
                                    <Option> Juli </Option>
                                    <Option> Agustus </Option>
                                    <Option> September </Option>
                                    <Option> Oktober </Option>
                                    <Option> November </Option>
                                    <Option> Desember </Option>
                                </Select>
                                
                            </FormItem>
                         </div>
                         <div style={{textIndent:"240px"}}>
                             <Button type="primary" onClick={()=>{ navigate("/laporan-petty-cash")}}> Buat Laporan</Button>
                         </div>
                     </Form>
                 </div>
                 

             </Card>
        </div>
   
    </div>
)
}