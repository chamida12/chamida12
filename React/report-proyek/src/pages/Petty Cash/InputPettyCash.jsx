






import { Button, Card, Form, Input, Select} from "antd";
import React, { useEffect, useState } from "react";
import './InputPettyCash.css'
import { useNavigate } from "react-router-dom";
import FormItem from "antd/lib/form/FormItem";

import { getUser,postUser } from "../../services/ApiPettyCash";

export const InputPettyCash = () => {
    const navigate = useNavigate ()
    const setListUser = useState([]);
    const [dataUser,setDataUser] = useState({no_akun:"",nama_akun:"",nominal:"",keterangan:"",periode:""})
    console.log(dataUser,setDataUser);

  
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
                                type="kode"
                                value={dataUser?.no_akun}
                                
                                onChange={(e)=>{
                                    setDataUser({...dataUser,no_akun:e.target.value})
                                }}

                                 /> 
                            </FormItem>
                         </div>
                         <div>
                            <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nama Akun">
                                <Select style={{width:"600px",marginLeft:"135px"}}
                                // value={namaAkun.nama_akun}
                                // onChange={(e)=>{
                                //     setNamaakun({...namaAkun,nama_akun:e.target.value})
                                // }}
                                
                                >
                                    <option value="Debit"> Debit </option>
                                    <option value="Kredit"> Kredit </option>
                               </Select>
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
                                <Input style={{width:"600px",marginLeft:"155px"}}
                                type="date"
                                value={dataUser?.periode}
                                
                                onChange={(e)=>{
                                    setDataUser({...dataUser,periode:e.target.value})
                                }}/>

                                
                            </FormItem>
                         </div>
                         <div style={{textIndent:"240px"}}>
                             <Button type="primary" onClick={()=>{ 
                                 postUser(dataUser,setDataUser,setIsEditing,setMessage)
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




// import { Button, Card, Form, Input, Select} from "antd";
// import React, { useEffect, useState } from "react";
// import './InputPettyCash.css'
// import { useNavigate } from "react-router-dom";
// import FormItem from "antd/lib/form/FormItem";

// import { getUser,postUser } from "../../services/ApiPettyCash";

// export const InputPettyCash = () => {
//     const navigate = useNavigate ()
//     const setListUser = useState([]);
//     const [dataUser,setDataUser] = useState({no_akun:"",nama_akun:"",nominal:"",keterangan:"",periode:""})
//     const [akun, setAkun] = useState("")
//     const setIsEditing = useState(false);
//     const [massage,setMessage]= useState("");

//     console.log(akun, "akun")
//     // const handleAkun = () => {

//     // }

//     useEffect(()=>{
//         getUser(setListUser);
//         setTimeout(()=>{
//             setMessage("");
//         },3000);
//     },[massage]);

// return(
//     <div>
//         <div>
//             <p style={{textAlign:"center",fontWeight:"bold",fontSize:15,padding:"50px"}}> PETTY CASH </p>
//              <Card style={{margin:"auto",width:"1000px"}}>
//                  <div>
//                      <Form>
//                          <div>
//                             <FormItem style={{fontWeight:"bold",margin:"30px"}} label="No Akun">
//                                 <Input style={{width:"600px",marginLeft:"150px"}}
//                                 type="kode"
//                                 // value={dataUser?.no_akun}
//                                 value={akun}
//                                 // onChange={(e)=>{
//                                 //     setDataUser({...dataUser,no_akun: e.target.value});
//                                 // }}
//                                 onChange={(e) => setAkun(e.target.value)}
//                                  /> 
//                             </FormItem>
//                          </div>
//                          <div>
//                             <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nama Akun">
//                                 <Select style={{width:"600px",marginLeft:"135px"}}>
//                                     <option value="Debit"> Debit </option>
//                                     <option value="Kredit"> Kredit </option>
//                                </Select>
//                             </FormItem>
//                          </div>
//                          <div>
//                             <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Nominal">
//                                 <Input style={{width:"600px",marginLeft:"150px"}}
//                                 value={dataUser?.nominal}
//                                 onChange={(e)=>{
//                                     setDataUser({...dataUser,nominal:e.target.value})
//                                 }}/>
//                             </FormItem>
//                          </div>
//                          <div>
//                             <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Keterangan">
//                                 <Input style={{width:"600px",marginLeft:"135px"}}
    
//                                 value={dataUser?.keterangan}
//                                 onChange={(e)=>{
//                                     setDataUser({...dataUser,keterangan:e.target.value})
//                                 }}/>
//                             </FormItem>
//                          </div>
//                          <div>
//                             <FormItem style={{fontWeight:"bold", margin:"30px"}} label="Periode">
//                                 <Input style={{width:"600px",marginLeft:"155px"}}
//                                 type="date"
//                                 value={dataUser?.periode}
//                                 onChange={(e)=>{
//                                     setDataUser({...dataUser,periode:e.target.value})
//                                 }}/>

                                
//                             </FormItem>
//                          </div>
//                          <div style={{textIndent:"240px"}}>
//                              <Button type="primary" onClick={()=>{ 
//                                  postUser(dataUser,setIsEditing,setDataUser,setMessage)
//                                  navigate("/laporan-petty-cash", { state:{ akun: akun}})}}> 
//                                  Buat Laporan</Button>
//                          </div>
//                          <div style={{marginTop:30}}>
//                              {massage}
//                          </div>
//                      </Form>
//                  </div>
                 

//              </Card>
//         </div>
   
//     </div>
// )
// }