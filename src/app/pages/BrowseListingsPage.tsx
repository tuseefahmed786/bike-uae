import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ListingCard } from "../components/ListingCard";
import { Search, SlidersHorizontal, Grid3x3, List, ChevronDown } from "lucide-react";

export function BrowseListingsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allListings = [
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
    {
      id: "9",
      image: "https://images.unsplash.com/photo-1770794550477-53750c4b7be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bW90b3JjeWNsZSUyMHNwb3J0JTIwYmlrZXxlbnwxfHx8fDE3NzU0OTE3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "BMW S1000RR - Black Sport Bike",
      price: "68,000",
      location: "Dubai",
      condition: "Excellent",
      postedTime: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      {/* Search Bar */}
      <div className="bg-white border-b border-neutral-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1 flex items-center space-x-2 bg-neutral-100 rounded-lg px-4 py-3">
              <Search className="w-5 h-5 text-neutral-500" />
              <input
                type="text"
                placeholder="Search for bikes, parts, accessories..."
                className="flex-1 bg-transparent outline-none text-neutral-900"
              />
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 border border-neutral-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-neutral-900">Filters</h3>
                <button className="text-sm text-orange-600 hover:text-orange-700">Clear All</button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">Category</label>
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors">
                  <option>All Categories</option>
                  <option>Motorcycles</option>
                  <option>Scooters</option>
                  <option>Spare Parts</option>
                  <option>Accessories</option>
                  <option>Helmets</option>
                  <option>Riding Gear</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">Price Range (AED)</label>
                <div className="space-y-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              {/* Brand */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">Brand</label>
                <div className="space-y-2">
                  {["Honda", "Yamaha", "Kawasaki", "Suzuki", "Ducati", "BMW"].map((brand) => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-orange-600" />
                      <span className="text-sm text-neutral-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Year */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">Year</label>
                <div className="space-y-2">
                  <input
                    type="number"
                    placeholder="From"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                  />
                  <input
                    type="number"
                    placeholder="To"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                  />
                </div>
              </div>

              {/* Condition */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">Condition</label>
                <div className="space-y-2">
                  {["Excellent", "Like New", "Good", "Fair"].map((condition) => (
                    <label key={condition} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-orange-600" />
                      <span className="text-sm text-neutral-700">{condition}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-3">Location</label>
                <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors">
                  <option>All Emirates</option>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm Al Quwain</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 w-full">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-1">Browse Listings</h1>
                <p className="text-neutral-600">{allListings.length} results found</p>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <div className="flex items-center space-x-2 bg-white border border-neutral-200 rounded-lg p-1 w-full sm:w-auto">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${
                      viewMode === "grid"
                        ? "bg-orange-500 text-white"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <Grid3x3 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${
                      viewMode === "list"
                        ? "bg-orange-500 text-white"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>
                <select className="bg-white border border-neutral-200 px-4 py-2 rounded-lg outline-none focus:border-orange-500 transition-colors w-full sm:w-auto">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <button className="lg:hidden bg-white border border-neutral-200 px-4 py-2 rounded-lg flex items-center space-x-2 w-full sm:w-auto">
                  <SlidersHorizontal className="w-5 h-5" />
                  <span>Filters</span>
                </button>
              </div>
            </div>

            {/* Listings Grid */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"}>
              {allListings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex items-center justify-center space-x-2">
              <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:border-orange-500 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:border-orange-500 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:border-orange-500 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:border-orange-500 transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
