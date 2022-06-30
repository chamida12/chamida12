import React from "react"
import { useNavigate } from "react-router-dom"

export const LaporanPettyCash = () => {
    const navigate = useNavigate()



return (
    <div>
        <div style={{textAlign:"center",padding:"50px"}}>
            <p style={{fontWeight:"bold",fontSize:30,textDecoration:"underline"}}>PT</p>
            <p style={{fontWeight:"bold",fontSize:20,lineHeight:"0.01rem"}}> Petty Cash </p>
            <p> Per : Juni </p>
        </div>
        <div style={{width:"1000px",margin:"auto"}}>
            <div>
                <p style={{borderBottom:" 5px solid grey "}}></p>
                <p style={{fontWeight:"bold",textIndent:"30px",fontSize:15}}> Debit </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"70px"}}>Kas Kecil</td>
                    <td style={{textIndent:"700px"}}>00.00</td> 

                </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"70px"}}>Kas Kecil</td>
                    <td style={{textIndent:"700px"}}>00.00</td> 

                </p>
                
                <p style={{borderBottom:" 1px solid lightGrey "}}/>
            </div>
               
            <div>
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
                
            </div>


        </div>
    </div>
)
}