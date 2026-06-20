import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

function CartPage() {
  const { cart, total } = useCart()
  const navigate = useNavigate()

  // Empty cart view
  if (cart.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-6xl mb-4">🛒</p>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-400 mb-6">
          Looks like you haven't added anything yet
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200"
        >
          Continue Shopping
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        Your Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">

        <div className="flex flex-col gap-4 flex-grow">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 h-fit lg:w-72 w-full">

          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="flex justify-between text-gray-500 text-sm mb-2">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between text-gray-500 text-sm mb-2">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between text-gray-500 text-sm mb-2">
            <span>Delivery</span>
            <span className="text-green-500 font-medium">Free</span>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex justify-between text-gray-800 font-bold text-lg mb-6">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          
          <button
            onClick={() => alert('Order placed successfully! 🎉')}
            className="w-full bg-green-600 text-white font-semibold py-3 rounded-xl hover:bg-green-800 transition-colors duration-200"
          >
            Proceed to Checkout
          </button>

          
          <button
            onClick={() => navigate('/')}
            className="w-full mt-3 text-gray-800 font-medium py-2 rounded-xl border border-gray-800 hover:bg-blue-50 transition-colors duration-200"
          >
            Continue Shopping
          </button>

        </div>
      </div>
    </div>
  )
}

export default CartPage