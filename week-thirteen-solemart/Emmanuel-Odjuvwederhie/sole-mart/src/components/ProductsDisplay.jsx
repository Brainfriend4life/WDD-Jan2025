import { useEffect } from "react";
import { useState } from "react";
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -gap-109">
      {products.map((product) => (
        <div key={product.id} className="">
          <div>
            <img
              src={product.imageSrc}
              alt={product.name}
              className="flex justify-between mx-20 pr-10 mt-25 "
            />
          </div>

          <div>
            <div>
              <h2 className="ml-25  gap-1 mt-5 text-[#667085] text-[18px] ">
                {product.name}
              </h2>

              <h2 className="ml-70 -mt-6 text-black-800 text-[18px] font-bold-700">
                ${product.price}
              </h2>
            </div>

            <p className="ml-25 mt-5">
              {product.numberInStock} shoes available
            </p>
            <p className="mt-5 ml-50">
              ({product.numberOfReviews})
              <div className="flex items-center -ml-25 -mt-4 gap-1">
                <FaStar className="text-yellow-400 " />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
              </div>
            </p>
            <div>
              <button class="bg-blue-950 w-[128px] size-sm h-[36px] mt-5 ml-20 rounded-[30px] text-[#FFFFFF] font-Semibold">
                Add To Cart
              </button>
              <button className="bg-[#D0D5DD] w-[128px] size-sm h-[36px] -mr-60 rounded-[30px] text-[Gray/700] font-Semibold ml-7">
                Add Shortlist
              </button>
            </div>
          </div>
          <section className="block p-4 bg-green-800">
            <div>
              <p>Copyright @ 2020 landify UI kit.</p>
              <p>All right reserved</p>
              <h1>Company </h1>
              <ul>
                <div>
                  {" "}
                  <a href="">About us</a>
                </div>
                <div>
                  {" "}
                  <a href="">Blog</a>
                </div>
                <div>
                  {" "}
                  <a href="">Contact us</a>
                </div>
                <div>
                  {" "}
                  <a href="">Pricing</a>
                </div>
                <div>
                  <a href="">Testimonials</a>
                </div>
              </ul>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export default ProductsDisplay;

// useEffect and useState
