import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductById } from '../services/api'
import { useCart } from '../context/CartContext'

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch single product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await getProductById(id)
        setProduct(data)
        setLoading(false)
      } catch (err) {
        setError('Product not found')
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  // Loading state
  if (loading) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-400 text-xl">Loading product...</p>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-24">
        <p className="text-red-400 text-xl">{error}</p>
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
          className="w-full md:w-72 h-72 object-cover rounded-xl"/>      
        
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

          <p className="text-sm mt-2">
            {product.countInStock > 0
              ? <span className="text-green-500 font-medium">In Stock ({product.countInStock} left)</span>
              : <span className="text-red-400 font-medium">Out of Stock</span>
            }
          </p>

          <p className="text-gray-500 mt-3 leading-relaxed">
            {product.description}
          </p>

          <p className="text-3xl font-bold text-blue-600 mt-4">
            ₹{product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            disabled={product.countInStock === 0}
            className={`mt-6 font-semibold px-6 py-3 rounded-xl transition-colors duration-200 w-full md:w-auto
              ${product.countInStock === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
          >
            {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail