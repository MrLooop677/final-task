import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
//sweet alert
const MySwal = withReactContent(Swal);

const Products = () => {
  const [products, setProducts] = useState([]);
  const getData = async () => {
    const data = await fetch("http://localhost:3009/data");
    const res = await data.json();
    setProducts(res);
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteItem = async (product) => {
    MySwal.fire({
      title: <p>{product.title}</p>,
      showCancelButton: true,
    }).then(async (data) => {
      if (data.isConfirmed) {
        const data = await fetch(`http://localhost:3009/data/${product.id}`, {
          method: "DELETE",
        });
        getData();
      }
    });
  };

  return (
    <>
      <div className="container">
        <Link to={"addProduct"} className="btn btn-success mb-3 mt-5">
          Add New Todo
        </Link>
        <table className="table table-dark table-striped d-block overflow-scroll"style={{"height":"100vh"}}>
          <thead className="d-table w-100"style={{"tableLayout": "fixed"}}>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th className="text-center">Completed</th>
              <th className="text-center">Operation</th>
            </tr>
          </thead>
          <tbody className="d-table w-100"style={{"tableLayout": "fixed"}}>
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td className="text-center">
                    {product.completed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill text-info" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                    </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-x-circle-fill text-danger"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                      </svg>
                    )}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-danger me-2 mb-2"
                      onClick={() => deleteItem(product)}
                    >
                      Delete
                    </button>
                    <Link
                      to={`${product.id}`}
                      className="btn btn-sm btn-info me-2 mb-2"
                    >
                      View
                    </Link>
                    <Link
                      to={`edit/${product.id}`}
                      className="btn btn-sm btn-primary mb-2"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Products;
