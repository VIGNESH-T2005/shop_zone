import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { cartCount } = useCart()

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopZone
        </Link>

        
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-medium"
          >
            Home
          </Link>

          <Link to="/cart" className="relative">
            <span className="text-2xl">🛒</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

      </div>
    </nav>
  )
}

export default Navbar