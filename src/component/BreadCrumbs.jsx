import React from "react";

const BreadCrumbs = () => {
  return (
    <div className="">
      <hr  />

      <nav class="flex my-3">
        <a
          href="/"
          class=" hover:text-gray-700 hover:underline transition duration-300 ease-in-out">
          Home
        </a>

        <span class="mx-2 text-gray-500">/</span>

        <span class="text-gray-500"> All Europion Brands</span>
      </nav>
      <hr />
    </div>
  );
};

export default BreadCrumbs;
