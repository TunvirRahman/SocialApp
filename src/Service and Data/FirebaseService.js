import Axios from "axios";

const baseURL = "https://social-4a626.firebaseio.com/user.json"


export default class FirebaseService{

    createNewUser = (user)=>{
        Axios.post(baseURL,{user}).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }

}


// export const getUsers = ()=>{

//     Axios.get(baseURL+"/user").then(res=>{
//         console.log(res)
//     }).catch(err=>{
//         console.log(err)
//     })
// }
