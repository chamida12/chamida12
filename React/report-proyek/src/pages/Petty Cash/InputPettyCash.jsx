import { Card, Form, Input } from "antd";
import React from "react";
import './InputPettyCash.css'
import { useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";

export const InputPettyCash = () => {
    const navigate = useNavigate ()
    

return(
    <div>
        <div style={{padding:"50px"}}>
            <p style={{textAlign:"center",fontWeight:"bold",fontSize:15}}> PETTY CASH </p>
             <Card style={{margin:"auto",width:"1000px"}}>
                 <div>
                     <Form style={{margin:"50px"}}>
                         <FormItem style={{fontWeight:"bold", margin:"30px",textAlign:"center"}} label="No Akun  ">
                             <Input style={{width:"600px"}}/>
                         </FormItem>
                         <FormItem style={{fontWeight:"bold", margin:"30px",textAlign:"center"}} label="Nominal">
                             <div>

                             <Input style={{width:"600px"}}/>
                             </div>
                         </FormItem>
                         <FormItem style={{fontWeight:"bold", margin:"30px",textAlign:"center"}} label="Debit">
                             <Input style={{width:"600px"}}/>
                         </FormItem>
                         <FormItem style={{fontWeight:"bold", margin:"30px",textAlign:"center"}} label="Keterangan">
                             <Input style={{width:"600px"}}/>
                         </FormItem>
                     </Form>
                 </div>

             </Card>
        </div>
   
    </div>
)
}