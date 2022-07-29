import axios from "axios";

const BASE_PATH ="https://c754-118-96-154-102.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/registerbaca`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}

export async function postUserPassword(email,password,setEmail,setPassword, setMessage) {
    const payload = {
       
        email: email,
        password: password,
       

    };

    try {
        const results = await axios.post(`${BASE_PATH}/register`, payload);
        if (results.status === 200) {
            setEmail({email:""});
            setPassword({password:""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};
