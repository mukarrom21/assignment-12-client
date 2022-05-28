import React from "react";

const Purchase = () => {
  return (
    <div class="form-control w-full max-w-xs">
      <label class="label">
        <span class="label-text">What is your name?</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered w-full max-w-xs"
      />
      <label class="label">
        <span class="label-text-alt">Alt label</span>
      </label>
    </div>
  );
};

export default Purchase;
