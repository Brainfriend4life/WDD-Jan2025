import { useEffect } from "react"
import { useState } from "react"
import { FaStar } from "react-icons/fa"

const ProductsDisplay = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/products.json')
        const data = await response.json()
        setProducts(data.products)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center-safe">
      {
        products.map((product) => (
          <div key={product.id} className="">
            <div>
              <img src={product.imageSrc} alt={product.name} className="ml-10" />
            </div>

            <div>
              <div>
                <h2 className="ml-9  ">{product.name} </h2>
                  <div className="text-yellow-400 flex space-x-1 ml-10 mt-7"> 
                <FaStar /> 
                <FaStar />
                <FaStar /> 
                <FaStar />
                </div>
                               



                <h2 className="ml-55 -mt-15">${product.price} </h2>
              </div>
<div>
              <p className="ml-10 -mt-1">{product.numberInStock} shoes available</p>
              <p className="ml-35 -mt-2">({product.numberOfReviews})</p>
              </div>
              <div>
                <button className="bg-blue-800 rounded-3xl ml-10 mt-5 h-[35px] w-[121px] text-white font-semibold text-[15px]">Add To Cart</button>
                <button className="bg-blue-800 rounded-3xl h-[35px] w-[121px] text-white font-semibold text-[15px]">Add Shortlist</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
export default ProductsDisplay

// useEffect and useState