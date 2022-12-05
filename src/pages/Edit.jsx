import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router-dom";

const Edit = () => {
  let { productId } = useParams();
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const formSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:3009/data/${productId}`);
      const res = await data.json();
      setTitle(res.title);
      setCompleted(res.completed);
    };
    getData();
  }, [productId]);

  const editItem = () => {
    if (title.trim().length > 0 ) {
      axios
        .put(`http://localhost:3009/data/${productId}`, {
          title,
          completed:JSON.parse(completed),
        })
        .then(() => {
          navigate("/");
        });
    } else {
      MySwal.fire({
        title: <p>Please Enter Data</p>,
      });
    }
  };
  console.log(completed);
  return (
    <>
      <div className="container">
        <h4> Add Todo </h4>

        <form onSubmit={formSubmit}>
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add Title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
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
          <button type="submit" className="btn btn-primary" onClick={editItem}>
            Edit Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default Edit;
