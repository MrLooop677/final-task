import axios from "axios"
import { logIn } from "./userSlice";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export const addUser=async(user,dispatch)=>{
  try {
    const MySwal = withReactContent(Swal)

    const res= await axios.get("http://localhost:3007/data")
    console.log(res.data);
    const response=res.data
    const selectUser=response.find((ob)=>{
        return ob.email==user.email&&ob.password==user.password
    })
    console.log(selectUser);
    selectUser?dispatch(logIn(selectUser)) : MySwal.fire({
        title: <p>""User Doesn't Exist !!""</p>,
      })
    
  } catch (error) {
    console.log(error);
  }
}