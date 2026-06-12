function Footer() {
  return (
    <footer className="bg-blue-200 shadow-inner mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            ShopZone
          </div>

          {/* Links */}
          <div className="flex gap-6 text-gray-500 text-sm">
            <span className="hover:text-blue-600 cursor-pointer">About</span>
            <span className="hover:text-blue-600 cursor-pointer">Contact</span>
            <span className="hover:text-blue-600 cursor-pointer">Privacy Policy</span>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-200" />

        {/* Bottom Row */}
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} ShopZone. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer