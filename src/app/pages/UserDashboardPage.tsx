import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  User,
  Package,
  Heart,
  MessageCircle,
  Settings,
  BarChart3,
  Eye,
  Edit,
  Trash2,
  TrendingUp,
  Clock,
  CheckCircle,
} from "lucide-react";

export function UserDashboardPage() {
  const [activeTab, setActiveTab] = useState("my-ads");

  const myAds = [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1552293164-607ec8360528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Honda CBR 1000RR Fireblade - Excellent Condition",
      price: "52,000",
      status: "active",
      views: 342,
      messages: 12,
      postedDate: "2 days ago",
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1758550470802-2ec380feb069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Kawasaki Ninja ZX-10R - Track Ready",
      price: "48,500",
      status: "pending",
      views: 89,
      messages: 3,
      postedDate: "1 day ago",
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1764160858445-420a207b44c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Yamaha YZF-R1 - Yellow Sport Edition",
      price: "38,000",
      status: "sold",
      views: 521,
      messages: 28,
      postedDate: "1 week ago",
    },
  ];

  const favorites = [
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1598612508179-b66815703995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Ducati Monster 821 - Red Performance",
      price: "45,000",
      location: "Dubai",
    },
    {
      id: "5",
      image: "https://images.unsplash.com/photo-1770794550477-53750c4b7be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8bW90b3JjeWNsZSUyMHNwb3J0JTIwYmlrZXxlbnwxfHx8fDE3NzU0OTE3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "BMW S1000RR - Black Sport Bike",
      price: "68,000",
      location: "Dubai",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-neutral-900 mb-8">My Dashboard</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden sticky top-24">
              {/* Profile */}
              <div className="p-6 border-b border-neutral-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Ahmed Al Mansouri</h3>
                    <p className="text-sm text-neutral-600">ahmed@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-1 text-sm">
                  <div className="flex space-x-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500">★</span>
                    ))}
                  </div>
                  <span className="text-neutral-600">(28 reviews)</span>
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-2">
                <button
                  onClick={() => setActiveTab("my-ads")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "my-ads"
                      ? "bg-orange-50 text-orange-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <Package className="w-5 h-5" />
                  <span className="font-medium">My Ads</span>
                </button>
                <button
                  onClick={() => setActiveTab("favorites")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "favorites"
                      ? "bg-orange-50 text-orange-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                  <span className="font-medium">Favorites</span>
                </button>
                <button
                  onClick={() => setActiveTab("messages")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "messages"
                      ? "bg-orange-50 text-orange-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Messages</span>
                  <span className="ml-auto bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    5
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "profile"
                      ? "bg-orange-50 text-orange-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "settings"
                      ? "bg-orange-50 text-orange-600"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  <Settings className="w-5 h-5" />
                  <span className="font-medium">Settings</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "my-ads" && (
              <div>
                {/* Stats Cards */}
                <div className="grid md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-600 text-sm">Active Ads</span>
                      <TrendingUp className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-3xl font-bold text-neutral-900">1</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-600 text-sm">Pending</span>
                      <Clock className="w-4 h-4 text-orange-600" />
                    </div>
                    <p className="text-3xl font-bold text-neutral-900">1</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-600 text-sm">Sold</span>
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-3xl font-bold text-neutral-900">1</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-600 text-sm">Total Views</span>
                      <Eye className="w-4 h-4 text-purple-600" />
                    </div>
                    <p className="text-3xl font-bold text-neutral-900">952</p>
                  </div>
                </div>

                {/* Ads List */}
                <div className="bg-white rounded-xl border border-neutral-200">
                  <div className="p-6 border-b border-neutral-200">
                    <h2 className="text-xl font-semibold text-neutral-900">My Listings</h2>
                  </div>
                  <div className="divide-y divide-neutral-200">
                    {myAds.map((ad) => (
                      <div key={ad.id} className="p-6 hover:bg-neutral-50 transition-colors">
                        <div className="flex gap-4">
                          <img
                            src={ad.image}
                            alt={ad.title}
                            className="w-32 h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-neutral-900 mb-1">{ad.title}</h3>
                                <p className="text-xl font-bold text-orange-600">AED {ad.price}</p>
                              </div>
                              <div className="flex items-center space-x-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    ad.status === "active"
                                      ? "bg-green-100 text-green-700"
                                      : ad.status === "pending"
                                      ? "bg-orange-100 text-orange-700"
                                      : "bg-blue-100 text-blue-700"
                                  }`}
                                >
                                  {ad.status.charAt(0).toUpperCase() + ad.status.slice(1)}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-6 text-sm text-neutral-600 mb-4">
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{ad.views} views</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-4 h-4" />
                                <span>{ad.messages} messages</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{ad.postedDate}</span>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button className="flex items-center space-x-1 text-sm text-orange-600 hover:text-orange-700 font-medium">
                                <Edit className="w-4 h-4" />
                                <span>Edit</span>
                              </button>
                              <button className="flex items-center space-x-1 text-sm text-neutral-600 hover:text-neutral-900 font-medium">
                                <BarChart3 className="w-4 h-4" />
                                <span>Stats</span>
                              </button>
                              <button className="flex items-center space-x-1 text-sm text-red-600 hover:text-red-700 font-medium">
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "favorites" && (
              <div className="bg-white rounded-xl border border-neutral-200">
                <div className="p-6 border-b border-neutral-200">
                  <h2 className="text-xl font-semibold text-neutral-900">Saved Listings</h2>
                </div>
                <div className="divide-y divide-neutral-200">
                  {favorites.map((item) => (
                    <div key={item.id} className="p-6 hover:bg-neutral-50 transition-colors">
                      <div className="flex gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-32 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                          <p className="text-xl font-bold text-orange-600 mb-2">AED {item.price}</p>
                          <p className="text-sm text-neutral-600 mb-3">{item.location}</p>
                          <div className="flex items-center space-x-2">
                            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium">
                              View Details
                            </button>
                            <button className="px-4 py-2 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors text-sm font-medium">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div className="bg-white rounded-xl border border-neutral-200">
                <div className="p-6 border-b border-neutral-200">
                  <h2 className="text-xl font-semibold text-neutral-900">Messages</h2>
                </div>
                <div className="p-12 text-center">
                  <MessageCircle className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">No messages yet</h3>
                  <p className="text-neutral-600">
                    Your conversations with buyers and sellers will appear here
                  </p>
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Ahmed"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Al Mansouri"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="ahmed@example.com"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+971 50 123 4567"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Location
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors">
                      <option>Dubai</option>
                      <option>Abu Dhabi</option>
                      <option>Sharjah</option>
                      <option>Ajman</option>
                      <option>Ras Al Khaimah</option>
                      <option>Fujairah</option>
                      <option>Umm Al Quwain</option>
                    </select>
                  </div>
                  <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all font-medium">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-6">Settings</h2>
                <div className="space-y-6">
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-900 mb-4">Notifications</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-neutral-700">Email notifications</span>
                        <input type="checkbox" defaultChecked className="rounded text-orange-600" />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-neutral-700">SMS notifications</span>
                        <input type="checkbox" defaultChecked className="rounded text-orange-600" />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-neutral-700">New message alerts</span>
                        <input type="checkbox" defaultChecked className="rounded text-orange-600" />
                      </label>
                    </div>
                  </div>
                  <div className="border-b border-neutral-200 pb-6">
                    <h3 className="font-semibold text-neutral-900 mb-4">Privacy</h3>
                    <div className="space-y-3">
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-neutral-700">Show phone number on ads</span>
                        <input type="checkbox" className="rounded text-orange-600" />
                      </label>
                      <label className="flex items-center justify-between cursor-pointer">
                        <span className="text-neutral-700">Allow messages from anyone</span>
                        <input type="checkbox" defaultChecked className="rounded text-orange-600" />
                      </label>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-4">Account</h3>
                    <button className="text-red-600 hover:text-red-700 font-medium">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
