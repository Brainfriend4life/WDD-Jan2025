import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductsDisplay = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4">
            <div>
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-full h-auto mx-auto mt-4"
              />
            </div>

            <div className="mt-4">
              {/* Name and Price on same row */}
              <div className="flex justify-between items-center mx-4">
                <h2 className="text-[#667085] text-[18px]">{product.name}</h2>
                <h2 className="text-gray-800 text-[18px] font-semibold">
                  ${product.price}
                </h2>
              </div>

              <p className="ml-4 mt-2">
                {product.numberInStock} shoes available
              </p>

              <div className="ml-4 mt-2 flex items-center gap-1">
                {[...Array(Math.floor(product.rating))].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  ({product.numberOfReviews} reviews)
                </span>
              </div>

              <div className="mt-4 ml-4 flex gap-4">
                <button className="bg-blue-950 px-4 py-2 rounded-[30px] text-white font-semibold">
                  Add To Cart
                </button>
                <button className="bg-[#D0D5DD] px-4 py-2 rounded-[30px] text-gray-700 font-semibold">
                  Add Shortlist
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
