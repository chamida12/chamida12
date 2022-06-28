
import React, { useEffect}from "react";
import { useState } from "react";


const Post = () => {
    const [nama, setNama]= useState ("");
    const [error,setError] = useState("");
    const [loaded, setLoaded] = useState (false);


    useEffect (()=> {
        const loadAsyncStuff = async () => {
            try{
                const response = await fetch ("https://0f01-36-72-212-11.ap.ngrok.io/create");
                const json = await response.json();

                setNama(json);
            }catch(error){
                setError(error);
            }finally{
                setLoaded(true);
            }
        };
        loadAsyncStuff();
    },[]);

    return(
        <div>
            <input> Nama Baru : {nama}</input>
            <button onClick={() => setNama(nama)}> Update Nilai</button>
        </div>
    )
}
export default Post;