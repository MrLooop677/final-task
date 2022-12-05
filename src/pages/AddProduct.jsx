import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const AddProduct = () => {
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const [completed,setCompleted]=useState(false)
    const formSubmit=(e)=>{
        e.preventDefault()
    }
const addNewItem=()=>{
    if(title.trim().length>0){

        axios.post("http://localhost:3009/data",{
            title,
            completed:JSON.parse(completed),
        }).then(()=>{
            navigate("/")
        })
    }else{
        MySwal.fire({
            title: <p>Please Enter Data</p>,
          })
    }
}    
  return (
    <>
      <div className="container">
        <h4> Add Todo </h4>

        <form onSubmit={formSubmit}>
          <div className="mb-3">
        
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add Title"
              onChange={(e)=>setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label>Completed</label>
            <select
              name="dropdown"
              id="dropdown"
              onChange={(e) => setCompleted(e.target.value)}
              value={completed}
              className="w-100"
            >
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
          </div>   
          <button type="submit" className="btn btn-primary" onClick={addNewItem}>
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct; 
