'use client'

import { useEffect, useState } from "react"


const Productsdisplay = () => {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/Products.json')
        const data = await response.json()
        setProducts(data.products)
        console.log("products", products)
        
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()

  }, [])
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-20">
      {
        products.map((product) => {
          return (
            <div key={product.id}>
              <div>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="m-2">
                <div className="flex items-center gap-20">
                  <h2 className="text-gray-500 font-medium">{product.name}</h2>
                  <h2 className="text-2xl font-medium text-gray-700">${product.price}</h2>
                </div>

                <p className="font-extralight text-gray-500">{product.numberInStock} types of shoes available </p>
               {product.ratings !== undefined && (
                <div className="flex items-center mt-3 mb-1 ">
                  {/* {renderStars(product.ratings)} */}
                  <span className="text-sm text-gray-500 ml-2">({product.numberOfReviews})</span>
                </div>
)}

                <div className="text-white mt-3">
                  <button className="bg-blue-950 rounded-2xl p-1 pl-4 pr-4 mr-2">Add To Cart</button>
                  <button className="bg-blue-50 rounded-2xl p-1 pl-4 pr-4 border-2 border-b-gray-500 text-gray-700 font-bold">Shortlist</button>
                </div>
              </div>
            </div>

          );
        }

        )
      }
    </div>
  )
}



// const renderStars = (rating) => {
//   const stars = [];
//   for (let i = 1; i <= 5; i++) {
//     if (rating >= i) {
//       stars.push(<FaStar key={i} color="gold" />);
//     } else if (rating >= i - 0.5) {
//       stars.push(<FaStarHalfAlt key={i} color="gold" />);
//     } else {
//       stars.push(<FaRegStar key={i} color="gold" />);
//     }
//   }
//   return stars;
// };


export default Productsdisplay