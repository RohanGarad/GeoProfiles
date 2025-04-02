import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/profiles/${id}`);
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [id]);

  if (!profile) {
    return <p className="text-center text-gray-500 mt-4">Loading... Please Wait</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 border border-gray-200">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-gray-300 shadow-md"
        />
        <h2 className="text-2xl font-semibold mt-4">{profile.name}</h2>
        <p className="text-gray-500">{profile.qualification}</p>
      </div>

      {/* Profile Details */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">📧 Email</h3>
          <p className="text-gray-600">{profile.email || "Not Provided"}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">📍 Address</h3>
          <p className="text-gray-600">{profile.address}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">💡 Interests</h3>
          <p className="text-gray-600">{profile.interest || "Not Provided"}</p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">🎓 Qualification</h3>
          <p className="text-gray-600">{profile.qualification || "Not Provided"}</p>
        </div>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700">📝 About</h3>
        <p className="text-gray-600 mt-2">{profile.description}</p>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-between">
        <button 
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded shadow hover:bg-gray-400 transition"
          onClick={() => navigate(-1)}
        >
          🔙 Back
        </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
