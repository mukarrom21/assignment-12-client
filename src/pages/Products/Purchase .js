import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router";
import auth from "../../firebase.init";
import useProductDetail from "../../hooks/useProductDetail";
import { FaMinus, FaPlus } from "react-icons/fa";

const Purchase = () => {
  const [user] = useAuthState(auth);
  // const navigate = useNavigate();
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(0);
  const [minimum, setMinimum] = useState(false);
  const [product] = useProductDetail(productId);

  const { _id, productName, info, imgURL, minOrder, availabl, price } = product;
  useEffect(() => {
    setQuantity(minOrder);
  }, [minOrder]);

  if (quantity < minOrder) {
    return setMinimum;
  }
  return (
    <div>
      {/* ------------------- */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <div className="flex justify-center items-center lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
              <img alt="ecommerce" className="" src={imgURL} />
            </div>

            <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
              {/* <h2 className="text-sm title-font text-gray-500 tracking-widest">
                seller
              </h2> */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                {productName}
              </h1>
              <div className="flex mb-4">
                <h2 className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </h2>
              </div>
              <p className="leading-relaxed mb-4">{info}</p>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Product Id</span>
                <span className="ml-auto text-gray-900">{_id}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">available</span>
                <span className="ml-auto text-gray-900">{availabl}</span>
              </div>
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Minimum Order</span>
                <span className="ml-auto text-gray-900">{minOrder}</span>
              </div>
              {/* Price */}
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">Price</span>
                <span className="ml-auto text-gray-900">${price}</span>
              </div>
              {/* quantity */}
              <div className="flex border-t border-gray-200 py-2">
                <span className="text-gray-500">quantity</span>
                <button
                  onClick={() => setQuantity(parseInt(quantity) - 1)}
                  className="btn btn-xs ml-auto font-extrabold w-11"
                >
                  <FaMinus />
                </button>
                <input
                  className="ml-auto rounded-full border border-gray-200 text-center"
                  type="number"
                  name="quantity"
                  value={quantity}
                />
                {/* <span className="ml-auto text-gray-900">{quantity}</span> */}
                <button
                  onClick={() => setQuantity(parseInt(quantity) + 1)}
                  className="btn btn-xs ml-auto text-white w-11"
                >
                  <FaPlus />
                </button>
              </div>
              {/* --------------- Form --------------- */}
              <form class="space-y-6 my-10" data-bitwarden-watching="1">
                {/* Full Name */}
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      name="name"
                      type="text"
                      // autocomplete=""
                      // required=""
                      value={user?.displayName}
                      disabled
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Email */}
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Your Email{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      name="email"
                      type="text"
                      value={user?.email}
                      disabled
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Your Address */}
                <div>
                  <label
                    for="address"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Your Address{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      name="address"
                      type="text"
                      autocomplete="true"
                      // required=""
                      placeholder="You Address"
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Your Phone Number */}
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-neutral-600"
                  >
                    {" "}
                    Phone Number{" "}
                  </label>
                  <div class="mt-1">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="01x-xx-xxx-xxx"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      required
                      class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                    />
                  </div>
                </div>
                {/* Submit */}
                <div>
                  <button
                    disabled={minimum}
                    type="submit"
                    class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Buy Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------- */}
    </div>
  );
};

export default Purchase;
