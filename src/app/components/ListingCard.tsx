import { Link } from "react-router";
import { MapPin, Clock, Heart } from "lucide-react";

interface ListingCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  location: string;
  condition: string;
  postedTime: string;
}

export function ListingCard({ id, image, title, price, location, condition, postedTime }: ListingCardProps) {
  return (
    <Link
      to={`/listing/${id}`}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-neutral-200 group"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
          <Heart className="w-4 h-4 text-neutral-700" />
        </button>
        <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {condition}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {title}
        </h3>
        <p className="text-2xl font-bold text-orange-600 mb-3">AED {price}</p>
        <div className="flex items-center justify-between text-sm text-neutral-600">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{postedTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
