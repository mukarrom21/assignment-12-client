import React from "react";

const Purchase = () => {
  return (
    <div>
      <section class="">
        <div class=" items-center px-5 py-12 lg:px-20">
          <div class="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transform bg-white rounded-lg md:mt-0">
            <div class="mt-8">
              <div class="mt-6">
                <form
                  action="#"
                  method="POST"
                  class="space-y-6"
                  data-bitwarden-watching="1"
                >
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
                        placeholder="Your Name"
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
                        // autocomplete=""
                        // required=""
                        placeholder="Your Email"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  {/* Your Address */}
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Your Address{" "}
                    </label>
                    <div class="mt-1">
                      <input
                        name="product"
                        type="text"
                        // autocomplete=""
                        // required=""
                        placeholder="Your Email"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  {/* Your Phone Number */}
                  <div>
                    <label
                      for="email"
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
                  {/* Product quantity */}
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-neutral-600"
                    >
                      {" "}
                      Product Name{" "}
                    </label>
                    <div class="mt-1">
                      <input
                        name="product"
                        type="text"
                        // autocomplete=""
                        // required=""
                        placeholder="Your Email"
                        class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                      />
                    </div>
                  </div>
                  {/* Submit */}
                  <div>
                    <button
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
        </div>
      </section>{" "}
    </div>
  );
};

export default Purchase;
