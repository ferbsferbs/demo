import { ServerCallLogin } from "../serverCall/serverCall"

export default {
login
}

async function login(mail,pass){
    return ServerCallLogin(mail,pass)
}
