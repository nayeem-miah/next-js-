import getProduct from "@/Components/getProduct";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
//   console.log(params);
  const productData = await getProduct();

  const singleData = productData.find((product) => product._id === params._id);
  console.log(singleData);
  return (
    <div className="pt-20">
      {" "}
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row items-center">
          <img
            src={singleData.productImage}
            alt={singleData.productTitle}
            className="w-full lg:w-1/2 h-96 object-cover rounded-lg shadow-lg mb-6 lg:mb-0"
          />
          <div className="lg:ml-8">
            <h1 className="text-3xl font-semibold mb-4">
              {singleData.productTitle}
            </h1>
            <p className="text-xl text-gray-800 mb-4">
              Brand: {singleData.brandName}
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Category: {singleData.category}
            </p>
            <p className="text-gray-600 mb-4">{singleData.description}</p>
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl font-bold text-green-500">
                Price: ${singleData.price}
              </p>
              <p className="text-sm text-gray-500 line-through">
                ${parseFloat(singleData.price) + 10}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
                //   onClick={() => alert('Added to Cart!')}
              >
                Add to Cart
              </button>
              <Link href={"/"}>
                {" "}
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 focus:outline-none">
                  Back to Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
