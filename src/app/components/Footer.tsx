import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="text-xl font-bold text-white">BikeUAE</span>
            </div>
            <p className="text-sm mb-4">
              UAE's most trusted marketplace for buying and selling motorcycles, scooters, parts and accessories.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-neutral-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-neutral-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-neutral-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-neutral-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/browse" className="hover:text-white transition-colors">Browse Listings</Link></li>
              <li><Link to="/post-ad" className="hover:text-white transition-colors">Post Ad</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">My Dashboard</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/browse?category=motorcycles" className="hover:text-white transition-colors">Motorcycles</Link></li>
              <li><Link to="/browse?category=scooters" className="hover:text-white transition-colors">Scooters</Link></li>
              <li><Link to="/browse?category=parts" className="hover:text-white transition-colors">Spare Parts</Link></li>
              <li><Link to="/browse?category=accessories" className="hover:text-white transition-colors">Accessories</Link></li>
              <li><Link to="/browse?category=helmets" className="hover:text-white transition-colors">Helmets & Gear</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span>info@bikeuae.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; 2026 BikeUAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
