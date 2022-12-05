import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const View = () => {
  let { productId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`http://localhost:3009/data/${productId}`);
      const res = await data.json();
      setProducts(res);
    };
    getData();
  }, [productId]);
  return (
    <>
      <section className="pb-4">
        <div className="bg-white border rounded-5">
          <section
            className="w-100  p-4"
            style={{
              backgroundColor: " #eee",
              borderRadius: ".5rem .5rem 0 0,",
            }}
          >
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-5">
                <div className="card text-black">
                  <div className="card-body">
                    <div className="text-center">
                      <h5 className="card-title">Todo Details</h5>
                      <p className="text-muted mb-4">{products.title}</p>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <span>Completed</span>
                        <span>
                          {products.completed ? (
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-check-circle-fill text-info ms-1"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                            </div>
                          ) : (
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-x-circle-fill text-danger ms-1"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                              </svg>
                            </div>
                          )}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Id</span>
                        <span>{products.id}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default View;
