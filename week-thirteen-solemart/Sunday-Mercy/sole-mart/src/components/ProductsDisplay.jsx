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

  const getBgColor = (id) => {
    switch (id) {
      case 'P001': return 'bg-yellow-300'
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {
        products.map((product) => (
          <div key={product.id} className="w-[250px] h-[488px] rounded-[1.54px] my-[20px] ${getBgColor(product.id)}">
            <div>
              <img className="w-150px" src={product.imageSrc} alt={product.name} />
            </div>

            <div className="p-[10px]">
              <div className="flex justify-between items-center text-[1.2em]">
                <h2 className="text-[#667085] font-[500]">{product.name}  </h2>
                <h2 className="text-[#344054] font-bold">${product.price}</h2>
              </div>

              <p className="text-[#98A2B3] text-[0.87em] font-[400]">{product.numberInStock} shoes available</p>
              <p className="flex text-[#98A2B3] text-[0.87em] font-[400]"><FaStar className="text-yellow-400"/> ({product.numberOfReviews})</p>
              
              <div className="flex justify-between items-center my-[10px]  text-[0.87em] font-[600]">
                <button className="bg-[#3A4980] text-white rounded-[50px] border-[1px] px-[14px] py-[8px]">Add To Cart</button>
                <button className="bg-white text-[#344054] border-gray-300 rounded-[50px] border-[1px] px-[14px] py-[8px]">Add Shortlist</button>
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