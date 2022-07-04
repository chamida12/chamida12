





import { Button, Card, Cascader, Form, Input} from "antd";
import React, { useEffect, useState } from "react";
import './InputPettyCash.css'
import { useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";

import { getUser,postUser } from "../../services/ApiPettyCash";


const options = [
    {
          value: 'Januari',
          label: 'Januari',
         
         
        },
    {
         value: 'Februari',
         label:'Februari',
        },
    
    {
            value: 'Maret',
            label:'Maret',
           },
    {
            value: 'April',
            label:'April',
           },
    {
            value: 'Mei',
            label:'Mei',
           },
    {
            value: 'Juni',
            label:'Juni',
           },
    {
            value: 'Juli',
            label:'Juli',
           },
    {
            value: 'Agustus',
            label:'Agustus',
           },
    {
            value: 'September',
            label:'September',
           },
    {
            value: 'Oktober',
            label:'Oktober',
           },
    {
            value: 'November',
            label:'November',
           },
    {
            value: 'Desember',
            label:'Desember',
           },
    
       ];
    
    const onChange = (value) => {
        console.log(value);
        };


export const InputPettyCash = () => {
    const navigate = useNavigate ()
    const setListUser = useState([]);
    const [dataUser,setDataUser] = useState({no_akun:"",nama_akun:"",nominal:"",keterangan:"",periode:""})
    const setIsEditing = useState(false);
    const [massage,setMessage]= useState("");

    useEffect(()=>{
        getUser(setListUser);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[massage]);

return(
    <div>
        <div>
            <p style={{textAlign:"center",fontWeight:"bold",fontSize:15,padding:"50px"}}> PETTY CASH </p>
             <Card style={{margin:"auto",width:"1000px"}}>
                 <div>
                     <Form>
                         <div>
                            <FormItem style={{fontWeight:"bold",margin:"30px"}} label="No Akun">
                                <Input style={{width:"600px",marginLeft:"150px"}}
                                value={dataUser?.no_akun}
                                onChange={(e)=>{
                                    setDataUser({...dataUser,no_akun: e.target.value});
                                }} /> 
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nama Akun">
                                <Input style={{width:"600px",marginLeft:"135px"}} 
                                value={dataUser?.nama_akun}
                                onChange={(e)=>{
                                    setDataUser({...dataUser,nama_akun:e.target.value});
                                }}/>
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nominal">
                                <Input style={{width:"600px",marginLeft:"150px"}}
                                value={dataUser?.nominal}
                                onChange={(e)=>{
                                    setDataUser({...dataUser,nominal:e.target.value})
                                }}/>
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Keterangan">
                                <Input style={{width:"600px",marginLeft:"135px"}}
                                value={dataUser?.keterangan}
                                onChange={(e)=>{
                                    setDataUser({...dataUser,keterangan:e.target.value})
                                }}/>
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Periode">
                                <Cascader style={{width:"600px",marginLeft:"155px"}} options={options} onChange={onChange}/>
                                
                            </FormItem>
                         </div>
                         <div style={{textIndent:"240px"}}>
                             <Button type="primary" onClick={()=>{ 
                                 postUser(dataUser,setIsEditing,setDataUser,setMessage)
                                 navigate("/laporan-petty-cash")}}> 
                                 Buat Laporan</Button>
                         </div>
                         <div style={{marginTop:30}}>
                             {massage}
                         </div>
                     </Form>
                 </div>
                 

             </Card>
        </div>
   
    </div>
)
}