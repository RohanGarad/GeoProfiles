import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/profile/${profile._id}`);
  };

  const handleShowOnMap = () => {
    // This could be connected to a global state or parent callback to update the map
    console.log('Show on Map:', profile.address);
  };

  return (
    <div className="border rounded shadow p-4">
      <img src={profile.photo} alt={profile.name} className="w-full h-48 object-cover rounded" />
      <h2 className="mt-2 text-xl font-bold">{profile.name}</h2>
      <p className="text-gray-600">{profile.description}</p>
      <div className="mt-4 flex justify-between">
        <button onClick={handleViewDetails} className="bg-blue-500 text-white px-4 py-2 rounded">
          Details
        </button>
        <button onClick={handleShowOnMap} className="bg-green-500 text-white px-4 py-2 rounded">
          Summary
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
