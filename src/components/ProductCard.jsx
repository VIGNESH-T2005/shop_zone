import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">

      <img
        src={product.image}
        alt={product.name}
        onClick={() => navigate(`/product/${product._id}`)}
        className="w-full h-48 object-cover rounded-t-xl cursor-pointer"
      />

      <div className="p-4 flex flex-col flex-grow">

        <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
          {product.category}
        </span>

        <h3
          onClick={() => navigate(`/product/${product._id}`)}
          className="text-gray-800 font-semibold text-lg mt-1 cursor-pointer hover:text-blue-600"
        >
          {product.name}
        </h3>

        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {product.rating}
        </p>

        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="text-blue-600 font-bold text-xl">
            ₹{product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-gray-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default ProductCard