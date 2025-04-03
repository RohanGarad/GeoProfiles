import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile, setSelectedLocation }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/profile/${profile._id}`);
  };

  const handleShowOnMap = () => {
    if (!profile.latitude || !profile.longitude || isNaN(profile.latitude) || isNaN(profile.longitude)) {
      alert("Invalid or missing location data. Cannot display on map.");
      return;
    }
    setSelectedLocation({ latitude: profile.latitude, longitude: profile.longitude });
  };

  return (
    <div className="border rounded-lg shadow-lg p-6 flex items-center space-x-6 bg-white">
      <div className="w-48 h-48 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center shadow-md">
        <img src={profile.photo} alt={profile.name} className="w-full h-full object-cover" />
      </div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <p className="text-gray-600 mt-2">{profile.description}</p>

        <div className="mt-6 flex space-x-4">
          <button 
            onClick={handleViewDetails} 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
          >
            Details
          </button>
          <div className="relative group">
            <button 
              onClick={handleShowOnMap} 
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
            >
              Summary
            </button>
            <span className="absolute left-0 mt-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded hidden group-hover:block">
              View location on the map
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
