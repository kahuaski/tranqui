import React  from 'react'
import  axios from 'axios'

const conexionPost=async(body)=>{

   const  PostProducts = await axios.post('https://tranquiserver.onrender.com/api/v1/products',body)

   return PostProducts

}
export default conexionPost