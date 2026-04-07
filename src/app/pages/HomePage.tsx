import { Link } from "react-router";
import { Search, Bike, ShieldCheck, Zap, Users, ChevronRight, TrendingUp } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ListingCard } from "../components/ListingCard";

export function HomePage() {
  const categories = [
    { name: "Motorcycles", icon: "🏍️", count: "2,450+" },
    { name: "Scooters", icon: "🛵", count: "890+" },
    { name: "Spare Parts", icon: "⚙️", count: "3,200+" },
    { name: "Accessories", icon: "🎒", count: "1,540+" },
    { name: "Helmets", icon: "🪖", count: "680+" },
    { name: "Riding Gear", icon: "🧥", count: "920+" },
    { name: "Tires", icon: "⭕", count: "450+" },
    { name: "Exhausts", icon: "💨", count: "320+" },
  ];

  const featuredListings = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1552293164-607ec8360528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Honda CBR 1000RR Fireblade - Excellent Condition",
      price: "52,000",
      location: "Dubai",
      condition: "Excellent",
      postedTime: "2 hours ago",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1758550470802-2ec380feb069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kawasaki Ninja ZX-10R - Track Ready",
      price: "48,500",
      location: "Abu Dhabi",
      condition: "Like New",
      postedTime: "5 hours ago",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1764160858445-420a207b44c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Yamaha YZF-R1 - Yellow Sport Edition",
      price: "38,000",
      location: "Sharjah",
      condition: "Good",
      postedTime: "1 day ago",
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1584737131144-5b76ba8c4147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzY29vdGVyJTIwdmVzcGF8ZW58MXx8fHwxNzc1NDkxNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Vespa Primavera 150 - Classic Yellow",
      price: "18,500",
      location: "Dubai",
      condition: "Excellent",
      postedTime: "3 hours ago",
    },
  ];

  const recentListings = [
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1770794550452-51f02fb536a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Suzuki GSX-R 750 - Full Service History",
      price: "32,000",
      location: "Ajman",
      condition: "Good",
      postedTime: "4 hours ago",
    },
    {
      id: "6",
      image: "https://images.unsplash.com/photo-1598612508179-b66815703995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Ducati Monster 821 - Red Performance",
      price: "45,000",
      location: "Dubai",
      condition: "Excellent",
      postedTime: "6 hours ago",
    },
    {
      id: "7",
      image: "https://images.unsplash.com/photo-1610937253992-f1e3805927d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxzY29vdGVyJTIwdmVzcGF8ZW58MXx8fHwxNzc1NDkxNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Honda PCX 160 Scooter - Low Mileage",
      price: "12,800",
      location: "Abu Dhabi",
      condition: "Like New",
      postedTime: "8 hours ago",
    },
    {
      id: "8",
      image: "https://images.unsplash.com/photo-1547838277-a5db4d13e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxzY29vdGVyJTIwdmVzcGF8ZW58MXx8fHwxNzc1NDkxNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Vespa GTS 300 - Mint Condition",
      price: "22,000",
      location: "Dubai",
      condition: "Excellent",
      postedTime: "12 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                <span>UAE's #1 Motorcycle Marketplace</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Buy & Sell Bikes,<br />Parts & Accessories<br />in UAE
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                Join thousands of riders buying and selling motorcycles, scooters, and gear across the Emirates.
              </p>

              {/* Search Bar */}
              <div className="bg-white rounded-xl p-2 shadow-xl flex flex-col gap-2 sm:flex-row sm:items-center sm:space-x-2 w-full">
                <div className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0 sm:w-auto sm:flex-1">
                  <select className="bg-transparent text-neutral-900 px-4 py-3 outline-none font-medium rounded-lg border border-neutral-200 w-full sm:w-auto">
                    <option>All Categories</option>
                    <option>Motorcycles</option>
                    <option>Scooters</option>
                    <option>Parts</option>
                    <option>Accessories</option>
                  </select>
                  <div className="hidden sm:block w-px h-8 bg-neutral-300 mx-2"></div>
                  <input
                    type="text"
                    placeholder="Search for bikes, parts, accessories..."
                    className="flex-1 px-4 py-3 outline-none text-neutral-900 rounded-lg border border-neutral-200 w-full sm:w-auto"
                  />
                </div>
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-medium w-full sm:w-auto">
                  <Search className="w-5 h-5" />
                  <span>Search</span>
                </button>
              </div>

              <div className="flex items-center space-x-6 mt-8">
                <Link
                  to="/browse"
                  className="text-white hover:text-orange-400 transition-colors flex items-center space-x-2 font-medium"
                >
                  <span>Browse All Listings</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/post-ad"
                  className="text-white hover:text-orange-400 transition-colors flex items-center space-x-2 font-medium"
                >
                  <span>Post Your Ad</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1774838228161-b08a31ee8d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Motorcycle"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Popular Categories</h2>
          <p className="text-lg text-neutral-600">Explore what you're looking for</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/browse?category=${category.name.toLowerCase()}`}
              className="bg-white p-6 rounded-xl border border-neutral-200 hover:border-orange-500 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-orange-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-sm text-neutral-600">{category.count} listings</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Featured Listings</h2>
            <p className="text-lg text-neutral-600">Hand-picked premium bikes</p>
          </div>
          <Link
            to="/browse"
            className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-1"
          >
            <span>View All</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">Recently Added</h2>
              <p className="text-lg text-neutral-600">Fresh listings just posted</p>
            </div>
            <Link
              to="/browse"
              className="text-orange-600 hover:text-orange-700 font-medium flex items-center space-x-1"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BikeUAE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Why Choose BikeUAE?</h2>
          <p className="text-lg text-neutral-600">The trusted marketplace for riders in UAE</p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Trusted Marketplace</h3>
            <p className="text-sm text-neutral-600">
              Verified sellers and secure transactions for peace of mind
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Easy Posting</h3>
            <p className="text-sm text-neutral-600">
              List your bike in minutes with our simple posting process
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Bike className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">Fast Buying & Selling</h3>
            <p className="text-sm text-neutral-600">
              Connect with thousands of buyers and sellers instantly
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2">UAE-Focused</h3>
            <p className="text-sm text-neutral-600">
              Built specifically for the UAE motorcycle community
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your Bike?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Join thousands of sellers and reach buyers across UAE
          </p>
          <Link
            to="/post-ad"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg hover:shadow-xl transition-all font-semibold text-lg"
          >
            <span>Post Your Ad Now</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
