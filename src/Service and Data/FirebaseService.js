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
                let users = []
                Object.keys(res.data).map(item=>{
                    const user = res.data[item]
                    if(user.Email){
                        users.push(user)
                    }
                })
                resolve(users)
            }).catch(err=>{
                reject(err)
            })
        })
    }
    
    loadUserFromCountry = (countryOfOrigin)=>{
        return new Promise((resolve,reject)=>{
            this.loadAllUser().then(res=>{
                let users = []
                res.map(user=>{
                    if(user.ResidenceCountry.toUpperCase() === countryOfOrigin.toUpperCase()){
                        users.push(user)
                    }
                })
                resolve(users)
            }).catch(err=>{
                reject(err)
            })
        })
    }

    loginAndUserInfo = (email,password)=>{
        return new Promise((resolve,reject)=>{
            this.loadAllUser().then(users=>{
                users.map(user=>{
                    if(user.Email && user.Email === email && user.password === password){
                        resolve(user)
                    }
                })
                resolve([])
            }).catch(err=>{
                reject(err)
            })
        })
    }

}
