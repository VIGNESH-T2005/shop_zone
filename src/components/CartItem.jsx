import { useCart } from '../context/CartContext'

function CartItem({ item }) {
  const { removeFromCart, increaseQty, decreaseQty } = useCart()

  return (
    <div className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">

      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover rounded-lg"
      />

      <div className="flex-grow">

        <h3 className="text-gray-800 font-semibold text-base">
          {item.name}
        </h3>

        <p className="text-xs text-blue-600 font-medium uppercase mt-1">
          {item.category}
        </p>

        <p className="text-gray-500 text-sm mt-1">
          ₹{item.price} × {item.qty}
        </p>

      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-lg flex items-center justify-center"
        >
          −
        </button>

        <span className="text-gray-800 font-semibold w-6 text-center">
          {item.qty}
        </span>

        <button
          onClick={() => increaseQty(item.id)}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-lg flex items-center justify-center"
        >
          +
        </button>
      </div>

      <div className="text-right min-w-[80px]">

        <p className="text-blue-600 font-bold text-lg">
          ₹{item.price * item.qty}
        </p>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-red-400 hover:text-red-600 text-sm mt-1"
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default CartItem