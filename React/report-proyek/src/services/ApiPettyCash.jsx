import axios from "axios";

const BASE_PATH ="https://761e-114-142-171-45.ap.ngrok.io";

export async function getUser(setListUser){
    try{
        const results = await axios.get (`${BASE_PATH}/list`);
        setListUser(results.data.data)
        // console.log(results.data.data);
    }catch(error){
        console.log("ERROR GET",error);
    }

}
export async function editUser(dataUser, setIsEditing, setDataUser, setMessage) {
    const payload = dataUser;

    try {
        const results = await axios.put(`${BASE_PATH}/put/${dataUser.id}`, payload);
        if (results.status === 200) {
            setIsEditing(false);
            setDataUser({no_akun: "", nama_akun: "", nominal: "", keterangan: "",periode:""});
            setMessage("User Edited Successfully!!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error);
    }
    // console.log("EDIT USER", payload);
};

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

export async function deleteUser(data, setMessage) {
    try {
        const results = await axios.delete(`${BASE_PATH}/delete/${data}`);
        if (results.status === 200) {
            setMessage("User Deleted Successfully!!!")
            // console.log("DELETE SUCCESSFULLY !!!");
        }
        // console.log(results);
    } catch (error) {
        console.log("ERROR EDIT: ", error.response);
    }
}