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

            <div>
              <h2 className="ml-4 mt-4 text-[#667085] text-[18px]">
                {product.name}
              </h2>

              <h2 className="ml-55 -mt-6 text-gray-800 text-[18px] font-semibold">
                ${product.price}
              </h2>

              <p className="ml-4 mt-2">
                {product.numberInStock} shoes available
              </p>

              <p className="ml-38 mt-2">
                ({product.numberOfReviews} reviews)</p>
                <div className="flex items-center gap-1">
                  {[...Array(Math.floor(product.rating))].map((_, index) => (
                    <FaStar key={index} className="text-yellow-400  ml-2 -mt-5" />
                  ))}
                </div>
              

              <div className="mt-4">
                <button className="bg-blue-950 w-[128px] h-[36px] rounded-[30px] text-[#FFFFFF] font-semibold">
                  Add To Cart
                </button>
                <button className="bg-[#D0D5DD] w-[128px] h-[36px] rounded-[30px] text-gray-700 font-semibold ml-4">
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
