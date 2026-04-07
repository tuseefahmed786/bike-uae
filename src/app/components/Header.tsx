import { Link } from "react-router";
import { Search, Menu, User, Plus } from "lucide-react";

export function Header() {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-neutral-900 text-white py-2 px-4 text-center text-sm">
        <p>🎉 Welcome to BikeUAE - UAE's Premium Motorcycle Marketplace</p>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="BikecUAE Logo"
                className="w-22 h-12 object-contain rounded-lg"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
                Home
              </Link>
              <Link to="/browse" className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
                Browse Listings
              </Link>
              <div className="relative group">
                <button className="text-neutral-700 hover:text-neutral-900 font-medium transition-colors">
                  Categories
                </button>
              </div>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/post-ad"
                className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all font-medium"
              >
                <Plus className="w-4 h-4" />
                <span>Post Ad</span>
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 text-neutral-700 hover:text-neutral-900 transition-colors"
              >
                <User className="w-5 h-5" />
                <span className="hidden sm:inline">Login</span>
              </Link>
              <button className="md:hidden text-neutral-700">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
