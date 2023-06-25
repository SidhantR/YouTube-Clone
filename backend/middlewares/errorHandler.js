import {serverError, DEBUG_MODE} from "../config/index.js"
import CustomErrorHandler from "../services/CustomErrorHandler.js"

const errorHandler = (err, req,res, next) => {
    let statusCode = 500 
    let data = {
        message : serverError,
        ...(DEBUG_MODE == true && {orignalError: err.message})
    }

    if (err instanceof CustomErrorHandler){
        statusCode = err.status
        const data ={
            message: err.message
        }
    }

    return res.status(statusCode).json(data)
}

export default errorHandler
