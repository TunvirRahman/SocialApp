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
    loadAllUser = ()=>{
        return new Promise((resolve,reject)=>{
            Axios.get(baseURL).then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    
    loginAndUserInfo = (email,password)=>{
        return new Promise((resolve,reject)=>{
            this.loadAllUser().then(res=>{
                console.log(res.data[0])
            }).catch(err=>{
                reject(err)
            })
        })
    }

}
