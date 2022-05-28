import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../Shared/Loading";

const Products = () => {
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: items,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {items.map((item) => (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={item.imgURL} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{item.productName}</h2>
            <p>{item.info}</p>
            <div className="flex">
              <p>Minimum order: {item.minOrder}</p>
              <p>available: {item.availabl}</p>
              <p>Price: {item.price}</p>
            </div>
            <div class="">
              <button
                onClick={() => navigate("/purchase")}
                class="btn btn-primary w-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
