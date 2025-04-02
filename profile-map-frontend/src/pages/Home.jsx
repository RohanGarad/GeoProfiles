import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProfileList from "../components/ProfileList";
import MapComponent from "../components/MapComponent";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-10 shadow-lg text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-50 animate-pulse"></div>

        <h1 className="relative text-5xl font-extrabold tracking-wide animate-fade-in">
          Profile Explorer
        </h1>

        <p className="relative text-lg mt-3 opacity-90 animate-slide-up">
          Discover and connect with professionals worldwide
        </p>

        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            className="w-full h-16 text-white opacity-75"
            fill="currentColor"
          >
            <path
              fillOpacity="1"
              d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,176C672,213,768,267,864,266.7C960,267,1056,213,1152,202.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>


      <div className="container mx-auto px-6 py-8">
        <div className="sticky top-0 bg-white shadow-md p-4 rounded-lg z-10">
          <div className="flex flex-col md:flex-row it ems-center justify-between gap-4">
            <div className="w-full md:w-2/3">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <button 
              onClick={() => window.location.href = "http://localhost:5173/admin"} 
              className="bg-blue-600 text-white px-3 py-0 rounded-lg hover:bg-blue-700 transition"
            >
              Go to Admin Panel
            </button>
          </div>
        </div>


        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-9 rounded-lg shadow-lg h-[600px] overflow-y-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700">Available Profiles</h2>
            
            <div className="flex flex-wrap gap-4">
              <ProfileList searchTerm={searchTerm} setSelectedLocation={setSelectedLocation} />
            </div>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow-lg h-[500px] flex flex-col items-center justify-between">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">📍 Location Preview</h2>

            <div className="w-full h-full rounded-lg overflow-hidden border-2 border-gray-300 shadow-md hover:shadow-xl transition-all">
              <MapComponent latitude={selectedLocation?.latitude} longitude={selectedLocation?.longitude} />
            </div>

            {!selectedLocation && (
              <p className="mt-4 text-gray-500 text-sm">Select a profile to see the location on the map.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
