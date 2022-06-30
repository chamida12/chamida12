import React from "react"
import { useNavigate } from "react-router-dom"

export const Neraca = () => {
    const navigate = useNavigate()



return (
    <div>
        <div style={{textAlign:"center",padding:"50px"}}>
            <p style={{fontWeight:"bold",fontSize:30,textDecoration:"underline"}}>PT.HJ GLOVE INDONESIA</p>
            <p style={{fontWeight:"bold",fontSize:20,lineHeight:"0.01rem"}}> Neraca </p>
            <p> Per : 26 Juni 2022 </p>
        </div>
        <div style={{width:"1000px",margin:"auto"}}>
            <div>
                <p style={{borderBottom:" 5px solid grey "}}></p>
                <p style={{fontWeight:"bold",textIndent:"30px",fontSize:15}}> Asset Lancar </p>
                <p style={{lineHeight:"10%", textIndent:"80px"}}> Setara Kas </p>
                <p style={{borderBottom:" 1px solid lightGrey "}}></p>

            </div>
                <p style={{fontWeight:"bold",textIndent:"90px",fontSize:15}}> Petty Cash </p>
                <p style={{lineHeight:"10%"}}>

                    <td style={{textIndent:"130px"}}>Kas Kecil</td>
                    <td style={{textIndent:"700px"}}>00.00</td>     
                </p>
                <p style={{lineHeight:"10%"}}>
                
                    <td style={{textIndent:"130px"}}>Kas Pabrik</td>
                    <td style={{textIndent:"693px"}}>00.00</td>     
                </p>
                <p style={{lineHeight:"10%"}}>
                
                    <td style={{textIndent:"130px"}}>Kas Lain-Lain</td>
                    <td style={{textIndent:"680px"}}>00.00</td>  
                </p>
                 <p style={{borderBottom:" 1px solid lightGrey "}}></p>   
            <div>

                <p style={{fontWeight:"bold",textIndent:"90px",fontSize:15}}> Bank </p>
                <p style={{borderBottom:" 1px solid lightGrey "}}></p>  
            </div>
            <div>

                <p style={{fontWeight:"bold",textIndent:"90px",fontSize:15}}> Total </p>
            </div>
            <div>
                <p style={{borderBottom:" 3px solid lightGrey "}}></p>
                <p style={{lineHeight:"10%", textIndent:"80px"}}> Piutang </p>
                <p style={{fontWeight:"bold",textIndent:"90px",fontSize:15}}> Piutang Usaha</p>
                <p style={{borderBottom:" 1px solid lightGrey "}}></p>
            </div>
            <div>
                <p style={{fontWeight:"bold",textIndent:"90px",fontSize:15}}> Piutang Lain-Lain</p>
                <p style={{borderBottom:" 1px solid lightGrey "}}></p>
            </div>
            <div>
                <p style={{fontWeight:"bold",textIndent:"90px",fontSize:15}}> Angsuran Di Muka Pajak</p>
                
            </div>
            <p style={{borderBottom:" 5px solid grey "}}></p>


        </div>
    </div>
)
}