import {serverError} from "../config/index.js"

class CustomErrorHandler extends Error {
    constructor(status, msg){
        super()
        this.status = status
        this.message = msg
    }
    static serverError(msg = serverError){
        return new CustomErrorHandler(500, msg)
    }
}

export default  CustomErrorHandler