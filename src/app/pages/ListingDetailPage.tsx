import { useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ListingCard } from "../components/ListingCard";
import {
  Heart,
  Share2,
  MapPin,
  Calendar,
  Gauge,
  Settings,
  ShieldCheck,
  MessageCircle,
  Phone,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

export function ListingDetailPage() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1552293164-607ec8360528?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758550470802-2ec380feb069?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1764160858445-420a207b44c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const similarListings = [
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
      id: "6",
      image: "https://images.unsplash.com/photo-1598612508179-b66815703995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxtb3RvcmN5Y2xlJTIwc3BvcnQlMjBiaWtlfGVufDF8fHx8MTc3NTQ5MTc1MHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Ducati Monster 821 - Red Performance",
      price: "45,000",
      location: "Dubai",
      condition: "Excellent",
      postedTime: "6 hours ago",
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 mb-6">
              <div className="relative aspect-[16/10]">
                <img
                  src={images[currentImageIndex]}
                  alt="Motorcycle"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-6" : "bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                      index === currentImageIndex ? "border-orange-500" : "border-transparent"
                    }`}
                  >
                    <img src={image} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Excellent Condition
                  </div>
                  <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                    Honda CBR 1000RR Fireblade - Excellent Condition
                  </h1>
                  <div className="flex items-center space-x-4 text-neutral-600">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>Dubai, UAE</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Posted 2 hours ago</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg flex items-center justify-center transition-colors">
                    <Share2 className="w-5 h-5 text-neutral-700" />
                  </button>
                  <button className="w-10 h-10 bg-orange-100 hover:bg-orange-200 rounded-lg flex items-center justify-center transition-colors">
                    <Heart className="w-5 h-5 text-orange-600" />
                  </button>
                </div>
              </div>
              <div className="text-4xl font-bold text-orange-600 mb-6">AED 52,000</div>

              <div className="border-t border-neutral-200 pt-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Specifications</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-neutral-600">Brand</p>
                      <p className="font-semibold text-neutral-900">Honda</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-neutral-600">Model</p>
                      <p className="font-semibold text-neutral-900">CBR 1000RR Fireblade</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-neutral-600">Year</p>
                      <p className="font-semibold text-neutral-900">2021</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <Gauge className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-neutral-600">Mileage</p>
                      <p className="font-semibold text-neutral-900">8,500 km</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-neutral-600">Condition</p>
                      <p className="font-semibold text-neutral-900">Excellent</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <Settings className="w-5 h-5 text-orange-600" />
                    <div>
                      <p className="text-sm text-neutral-600">Engine</p>
                      <p className="font-semibold text-neutral-900">999cc Inline-4</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-6 mt-6">
                <h2 className="text-xl font-semibold text-neutral-900 mb-4">Description</h2>
                <div className="text-neutral-700 space-y-3">
                  <p>
                    Selling my beloved Honda CBR 1000RR Fireblade in excellent condition. This bike has been
                    meticulously maintained with full service history from authorized Honda dealer. Always
                    garaged and never tracked.
                  </p>
                  <p className="font-medium">Key Features:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Full service history with records</li>
                    <li>Recent tire replacement (Michelin Power RS)</li>
                    <li>Yoshimura exhaust system installed</li>
                    <li>Custom LED lighting</li>
                    <li>Tank protector and frame sliders</li>
                    <li>Two keys and all original documents</li>
                  </ul>
                  <p>
                    This is a rare opportunity to own one of the best superbikes in the market. The bike is in
                    pristine condition both mechanically and cosmetically. Selling due to relocation.
                  </p>
                  <p className="font-medium">Serious buyers only. No time wasters please.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Seller Card */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6 sticky top-24">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                  <User className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900">Ahmed Al Mansouri</h3>
                  <p className="text-sm text-neutral-600">Member since 2022</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <div className="flex space-x-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className="text-yellow-500">★</span>
                      ))}
                    </div>
                    <span className="text-sm text-neutral-600">(28 reviews)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-medium">
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:shadow-lg transition-all flex items-center justify-center space-x-2 font-medium">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp</span>
                </button>
                <button className="w-full border-2 border-orange-500 text-orange-600 py-3 rounded-lg hover:bg-orange-50 transition-all flex items-center justify-center space-x-2 font-medium">
                  <Phone className="w-5 h-5" />
                  <span>Show Number</span>
                </button>
              </div>

              <div className="border-t border-neutral-200 pt-4">
                <p className="text-sm text-neutral-600 text-center">
                  <ShieldCheck className="w-4 h-4 inline mr-1 text-green-600" />
                  Verified Seller
                </p>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-semibold text-neutral-900 mb-3">Safety Tips</h3>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Meet the seller in a safe public location</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Check the item before you buy</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Pay only after collecting the item</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 mt-0.5">•</span>
                  <span>Never transfer money in advance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Similar Listings */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">Similar Listings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarListings.map((listing) => (
              <ListingCard key={listing.id} {...listing} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
