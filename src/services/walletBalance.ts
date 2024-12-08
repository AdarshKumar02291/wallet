import axios from "axios"

export const walletBalance = async (data:any)=>{
    const response = await axios.post(``,data)
    return response.data
}