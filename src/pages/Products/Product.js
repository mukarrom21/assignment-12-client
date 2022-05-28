import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { _id, productName, minOrder, availabl, price, imgURL, info } = item;

  const navigate = useNavigate();
  const handleBuy = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div class="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={imgURL} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{productName}</h2>
        <p>{info}</p>
        <div className="flex">
          <p className="font-bold">Minimum order: {minOrder}</p>
          <p className="font-bold">available: {availabl}</p>
          <p className="font-bold">Price: {price}</p>
        </div>
        <div class="">
          <button
            onClick={() => handleBuy(_id)}
            class="btn btn-primary w-full"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

/*
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
 */
