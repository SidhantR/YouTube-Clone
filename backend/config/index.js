import dotenv from 'dotenv'
dotenv.config()

// env variables
export const MONGO = process.env.MONGO;
export const PORT = process.env.PORT;
export const DEBUG_MODE = process.env.DEBUGMODE

// constants
export const serverError = "Internal Server Error";
