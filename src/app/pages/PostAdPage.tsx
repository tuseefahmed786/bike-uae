import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Upload, X, CheckCircle } from "lucide-react";

export function PostAdPage() {
  const [step, setStep] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setUploadedImages((prev) => [...prev, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Post Your Ad</h1>
          <p className="text-lg text-neutral-600">
            Reach thousands of buyers across UAE in minutes
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {[
              { number: 1, label: "Category" },
              { number: 2, label: "Details" },
              { number: 3, label: "Photos" },
              { number: 4, label: "Review" },
            ].map((stepItem, index) => (
              <div key={stepItem.number} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all ${
                      step >= stepItem.number
                        ? "bg-orange-500 text-white"
                        : "bg-neutral-200 text-neutral-500"
                    }`}
                  >
                    {step > stepItem.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      stepItem.number
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm font-medium ${
                      step >= stepItem.number ? "text-neutral-900" : "text-neutral-500"
                    }`}
                  >
                    {stepItem.label}
                  </p>
                </div>
                {index < 3 && (
                  <div
                    className={`h-1 flex-1 transition-all ${
                      step > stepItem.number ? "bg-orange-500" : "bg-neutral-200"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl p-8 border border-neutral-200">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Select Category</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Motorcycles", icon: "🏍️", desc: "Sport bikes, cruisers, touring bikes" },
                  { name: "Scooters", icon: "🛵", desc: "City scooters, electric scooters" },
                  { name: "Spare Parts", icon: "⚙️", desc: "Engine parts, brakes, suspension" },
                  { name: "Accessories", icon: "🎒", desc: "Bags, covers, phone mounts" },
                  { name: "Helmets", icon: "🪖", desc: "Full face, half face, modular" },
                  { name: "Riding Gear", icon: "🧥", desc: "Jackets, gloves, boots, pants" },
                ].map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setStep(2)}
                    className="p-6 border-2 border-neutral-200 rounded-xl hover:border-orange-500 hover:bg-orange-50 transition-all text-left group"
                  >
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="font-semibold text-neutral-900 mb-1 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-neutral-600">{category.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Add Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Ad Title *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Honda CBR 1000RR Fireblade - Excellent Condition"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                  />
                  <p className="mt-1 text-sm text-neutral-500">
                    A clear title helps buyers find your ad
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Brand *
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors">
                      <option>Select Brand</option>
                      <option>Honda</option>
                      <option>Yamaha</option>
                      <option>Kawasaki</option>
                      <option>Suzuki</option>
                      <option>Ducati</option>
                      <option>BMW</option>
                      <option>Harley Davidson</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Model *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., CBR 1000RR"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Year *
                    </label>
                    <input
                      type="number"
                      placeholder="2021"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Mileage (km) *
                    </label>
                    <input
                      type="number"
                      placeholder="8500"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Price (AED) *
                    </label>
                    <input
                      type="number"
                      placeholder="52000"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Condition *
                    </label>
                    <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors">
                      <option>Select Condition</option>
                      <option>Excellent</option>
                      <option>Like New</option>
                      <option>Good</option>
                      <option>Fair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Location *
                  </label>
                  <select className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors">
                    <option>Select Emirate</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Ajman</option>
                    <option>Ras Al Khaimah</option>
                    <option>Fujairah</option>
                    <option>Umm Al Quwain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Describe your bike in detail. Include information about condition, service history, modifications, reason for selling, etc."
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg outline-none focus:border-orange-500 transition-colors resize-none"
                  ></textarea>
                  <p className="mt-1 text-sm text-neutral-500">
                    Detailed descriptions get more interest
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Upload Photos</h2>
              <p className="text-neutral-600 mb-6">
                Add up to 10 photos. First photo will be the cover image.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {uploadedImages.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden border-2 border-neutral-200 group">
                    <img src={image} alt="" className="w-full h-full object-cover" />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    {index === 0 && (
                      <div className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Cover
                      </div>
                    )}
                  </div>
                ))}

                {uploadedImages.length < 10 && (
                  <label className="aspect-square border-2 border-dashed border-neutral-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-orange-50 transition-all">
                    <Upload className="w-8 h-8 text-neutral-400 mb-2" />
                    <span className="text-sm text-neutral-600">Upload Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                <h4 className="font-medium text-neutral-900 mb-2">Photo Tips</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Use high-quality, clear photos</li>
                  <li>• Show bike from different angles</li>
                  <li>• Include close-ups of any damages or special features</li>
                  <li>• Good lighting makes a big difference</li>
                </ul>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(4)}
                  className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-6">Review & Publish</h2>

              <div className="space-y-6 mb-8">
                <div className="bg-neutral-50 rounded-lg p-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">Ad Preview</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Category:</span>
                      <span className="font-medium">Motorcycles</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Title:</span>
                      <span className="font-medium">Honda CBR 1000RR Fireblade</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Price:</span>
                      <span className="font-medium text-orange-600">AED 52,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Location:</span>
                      <span className="font-medium">Dubai</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Photos:</span>
                      <span className="font-medium">{uploadedImages.length} uploaded</span>
                    </div>
                  </div>
                </div>

                <div className="border border-neutral-200 rounded-lg p-6">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 rounded text-orange-600" />
                    <span className="text-sm text-neutral-700">
                      I confirm that all information provided is accurate and I agree to BikeUAE's{" "}
                      <a href="#" className="text-orange-600 hover:underline">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-orange-600 hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 border border-neutral-300 rounded-lg hover:bg-neutral-50 transition-colors font-medium"
                >
                  Back
                </button>
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-medium flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Publish Ad</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl p-6 text-white text-center">
          <h3 className="font-semibold mb-2">Need Help?</h3>
          <p className="text-orange-50 text-sm mb-4">
            Our support team is here to assist you with posting your ad
          </p>
          <button className="bg-white text-orange-600 px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium">
            Contact Support
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
