import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { getUser } from "../../services/ApiPettyCash";


export const LaporanPettyCash = () => {
    const location = useLocation()
    console.log(location)
    
    // const [ listUser,setListUser] = useState([]);
    const [ listUser,setListUser] = useState([]);
    const [dataUser,setDataUser] = useState({no_akun:"",nama_akun:"",nominal:"",keterangan:""});
    // const setIsEditing = useState(false);
    const [messege,setMessage] = useState("");

    useEffect (()=>{
        getUser(setListUser);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[messege]);

console.log(setDataUser);
console.log(listUser);

return (
    <div>
       

        <p style={{textAlign:"center",padding:"50px"}}>
            <p style={{fontWeight:"bold",fontSize:30,textDecoration:"underline"}}>PT</p>
            <p style={{fontWeight:"bold",fontSize:20,lineHeight:"0.01rem"}}> Petty Cash </p>
            <p> Per : Juni </p>
        </p>
            
        <p style={{width:"1000px",margin:"auto"}}>
            
                <p style={{borderBottom:" 5px solid grey "}}></p>
                <p style={{fontWeight:"bold",textIndent:"30px",fontSize:15}}> Debit </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"70px"}}>Kas Kecil</td>
                    <td style={{textIndent:"700px"}}>00.00</td> 

                </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"70px"}} >Kas Kecil</td>
                    <td style={{textIndent:"700px"}} value={{dataUser}}>{dataUser.no_akun}</td> 

                </p>
                
                <p style={{borderBottom:" 1px solid lightGrey "}}/>
            
               
            <p>
                <p style={{fontWeight:"bold",textIndent:"30px",fontSize:15}}> Kredit </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"70px"}}>Kas Kecil</td>
                    <td style={{textIndent:"700px"}}>00.00</td> 

                </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"70px"}}>Kas Kecil</td>
                    <td style={{textIndent:"700px"}}>00.00</td> 

                </p>
                <p style={{borderBottom:" 5px solid grey "}}></p>
                
            </p>


        </p>
    </div>
)
}