import getProduct from "@/Components/getProduct";
import Link from "next/link";
import React from "react";

const productPage = async () => {
  const productData = await getProduct();
  return (
    <div className="pt-20">
      
      <h3 className="text-2xl text-center">All products </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">
        {productData?.map((product) => (
          <div key={product._id}>
            <div className="border border-gray-300 p-4 m-4 rounded-lg shadow-md w-64 text-center">
            <img src={product.productImage} alt={product.productTitle} className="w-full h-48 object-cover rounded-lg" />
            <h3 className="text-lg font-semibold mt-4">{product.productTitle.slice(0,20)}</h3>
            <p className="text-sm text-gray-600">Brand: {product.brandName}</p>
            <p className="text-sm text-gray-600">Price: ${product.price}</p>
            <p className="text-sm text-gray-600">Category: {product.category}</p>
            {/* <p className="text-sm text-gray-600 mt-2">Description: {product.description}</p> */}

            <div className="mt-4 flex justify-center space-x-4">
                <button
                    // onClick={handleAddToCart}
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none">
                    Add to Cart
                </button>
             <Link href={`/products/${product._id}`}>   <button
                    
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none">
                    Details
                </button></Link>
            </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default productPage;
