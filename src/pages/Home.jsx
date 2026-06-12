import { useState } from 'react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Get unique categories from products
  const categories = ["All", ...new Set(products.map(p => p.category))]

  // Filter products based on selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Hero Banner */}
      <div className="bg-gray-900 rounded-2xl text-white text-center py-16 px-6 mb-10">
        <h1 className="text-4xl font-bold mb-3">Welcome to ShopZone</h1>
        <p className="text-lg text-blue-100">Find the best products at the best prices</p>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-200
              ${selectedCategory === category
                ? 'bg-gray-900 text-white border-gray-900'
                : 'bg-white text-gray-600 border-gray-300 hover:border-gray-900 hover:text-gray-900'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}

export default Home