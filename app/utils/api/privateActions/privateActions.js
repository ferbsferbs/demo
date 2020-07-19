import { ServerCallGetAulas, ServerCallVerify } from "../serverCall/serverCall"


export default {
    getAulas,
    verify
}

async function getAulas(){
    return ServerCallGetAulas()
}


async function verify(){
    return ServerCallVerify()
}
