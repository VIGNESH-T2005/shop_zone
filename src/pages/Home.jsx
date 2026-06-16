import { useState, useEffect } from 'react'
import { getProducts } from '../services/api'
import ProductCard from '../components/ProductCard'

function Home() {
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await getProducts()
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const categories = ["All", ...new Set(products.map(p => p.category))]

  const filteredProducts = products
    .filter(p => selectedCategory === "All" ? true : p.category === selectedCategory)
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))

  if (loading) {
    return (
      <div className="text-center py-24">
        <p className="text-gray-400 text-xl">Loading products...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-24">
        <p className="text-red-400 text-xl">{error}</p>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      <div className="bg-blue-600 rounded-2xl text-white text-center py-16 px-6 mb-10">
        <h1 className="text-4xl font-bold mb-3">Welcome to ShopZone</h1>
        <p className="text-lg text-blue-100">Find the best products at the best prices</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-5 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 bg-white text-gray-700"
        />
      </div>

      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200
              ${selectedCategory === category
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white text-gray-600 border-gray-300 hover:border-blue-600 hover:text-blue-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="text-gray-400 text-sm mb-4">
        Showing {filteredProducts.length} products
      </p>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-gray-500 text-lg">No products found for "{searchQuery}"</p>
          <button
            onClick={() => { setSearchQuery(""); setSelectedCategory("All") }}
            className="mt-4 text-blue-600 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Home