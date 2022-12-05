import axios from "axios"

export const addUser=async(user,dispatch)=>{
  try {
    const res= await axios.post("http://localhost:3007/data",{
      ...user
    })
  } catch (error) {
    console.log(error);
  }
}