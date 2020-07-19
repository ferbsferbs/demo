import { BASE_URL } from "../../constants";

export async function ServerCallLogin(email,password){
    let config ={
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({email,password})
      }
      
   return await fetch(BASE_URL+"/api/auth/login",config).then(res=>res.json()).then(result=>Promise.resolve(result)).catch(e=>Promise.reject(e))
}

export async function ServerCallVerify(){
    let config ={
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
      }
      
   return await fetch(BASE_URL+"/api/auth/verify",config).then(res=>res.json()).then(result=>Promise.resolve(result)).catch(e=>Promise.reject(e))
}

export async function ServerCallGetAulas(){
    let config ={
        method: "GET",
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
      }
      
   return await fetch(BASE_URL+"/api/aula",config).then(res=>res.json()).then(result=>Promise.resolve(result)).catch(e=>Promise.reject(e))
}

