import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const ourProducts = [
    {
      id: 1,
      productName: "Lanch",
      info: "Specially designed double tapered tips slide under the clip and grip the side of the clip, helping prevent damage. Tips are angled 45° providing more leverage for easier clip removal, even in very tight spots. Dual durometer cushioned grips for comfort.",
      imgURL:
        "https://cdn11.bigcommerce.com/s-3ihov9f/images/stencil/1280x1280/products/10037/12998/41080_2D9B5A0F36A5B__09340.1588835527.jpg?c=2",
      minOrder: 100,
      availabl: 1000,
      price: 59,
    },
    {
      id: 2,
      productName: "Lanch",
      info: "Specially designed double tapered tips slide under the clip and grip the side of the clip, helping prevent damage. Tips are angled 45° providing more leverage for easier clip removal, even in very tight spots. Dual durometer cushioned grips for comfort.",
      imgURL:
        "https://cdn11.bigcommerce.com/s-3ihov9f/images/stencil/1280x1280/products/10037/12998/41080_2D9B5A0F36A5B__09340.1588835527.jpg?c=2",
      minOrder: 100,
      availabl: 1000,
      price: 59,
    },
    {
      id: 3,
      productName: "41080 TRIM CLIP PLIERS 45 DEGREE",
      info: "Specially designed double tapered tips slide under the clip and grip the side of the clip, helping prevent damage. Tips are angled 45° providing more leverage for easier clip removal, even in very tight spots. Dual durometer cushioned grips for comfort.",
      imgURL:
        "https://cdn11.bigcommerce.com/s-3ihov9f/images/stencil/1280x1280/products/10037/12998/41080_2D9B5A0F36A5B__09340.1588835527.jpg?c=2",
      minOrder: 100,
      availabl: 1000,
      price: 59,
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {ourProducts.map((item) => (
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
              <button onClick={()=>navigate('/purchase')} class="btn btn-primary w-full">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
