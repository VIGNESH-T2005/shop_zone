import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  // Find product by id from params
  const product = products.find(p => p.id === parseInt(id))

  // If product not found
  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-xl">Product not found.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <button
        onClick={() => navigate('/')}
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Home
      </button>

      <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col md:flex-row gap-8">

        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-72 h-72 object-cover rounded-xl"
        />

        <div className="flex flex-col justify-between flex-grow">

          <span className="text-xs text-blue-600 font-semibold uppercase tracking-wide">
            {product.category}
          </span>

          <h1 className="text-2xl font-bold text-gray-800 mt-2">
            {product.name}
          </h1>

          <p className="text-yellow-500 mt-2">
            ⭐ {product.rating} / 5
          </p>

          <p className="text-gray-500 mt-3 leading-relaxed">
            {product.description}
          </p>

          {/* Price */}
          <p className="text-3xl font-bold text-blue-600 mt-4">
            ₹{product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="mt-6 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 w-full md:w-auto"
          >
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail