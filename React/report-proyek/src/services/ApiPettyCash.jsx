






import axios from "axios";

const BASE_PATH ="https://644d-114-142-169-43.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/list`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}


export async function postUser(dataUser, setDataUser, setMessage) {
    const payload = {
        no_akun: dataUser.no_akun,
        nama_akun: dataUser.nama_akun,
        nominal: dataUser.nominal,
        keterangan: dataUser.keterangan,
        periode:dataUser.periode
    };

    try {
        const results = await axios.post(`${BASE_PATH}/create`, payload);
        if (results.status === 200) {
            setDataUser({no_akun: "", nama_akun: "", nominal: "", keterangan: "",periode:""});
            setMessage("New User Added Successfully !!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
};
