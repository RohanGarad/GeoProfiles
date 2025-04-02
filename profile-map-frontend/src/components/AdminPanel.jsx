import { useState, useEffect } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    photo: "",
    email: "",
    description: "",
    interest: "",
    qualification: "",
    address: "",
    latitude: "",
    longitude: "",
  });

  const [profiles, setProfiles] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/profiles");
      setProfiles(res.data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/profiles/${editingId}`, profileData);
        setMessage("Profile updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/profiles", profileData);
        setMessage("Profile added successfully!");
      }
      fetchProfiles();
      setProfileData({ name: "", photo: "", email: "", description: "", interest: "", qualification: "", address: "", latitude: "", longitude: "" });
      setEditingId(null);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  const handleEdit = (profile) => {
    setProfileData(profile);
    setEditingId(profile._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/profiles/${id}`);
      setMessage("Profile deleted successfully!");
      fetchProfiles();
    } catch (error) {
      console.error("Error deleting profile:", error);
    }
  };

  return ( 
    <div className="max-w-5xl mx-auto my-8 p-6 bg-gray-100 shadow-md rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-700">
        Admin Panel
      </h2>
  
      {message && <p className="mb-4 text-green-600 font-semibold text-center">{message}</p>}
  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
            {editingId ? "Update Profile" : "Add New Profile"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Name" value={profileData.name} onChange={handleChange} className="border p-2 w-full rounded" required />
            <input name="photo" placeholder="Photo URL" value={profileData.photo} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="email" placeholder="Email" value={profileData.email} onChange={handleChange} className="border p-2 w-full rounded" />
            <textarea name="description" placeholder="Description" value={profileData.description} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="interest" placeholder="Interest" value={profileData.interest} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="qualification" placeholder="Qualification" value={profileData.qualification} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="address" placeholder="Address" value={profileData.address} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="latitude" placeholder="Latitude" value={profileData.latitude} onChange={handleChange} className="border p-2 w-full rounded" />
            <input name="longitude" placeholder="Longitude" value={profileData.longitude} onChange={handleChange} className="border p-2 w-full rounded" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition">
              {editingId ? "Update Profile" : "Add Profile"}
            </button>
          </form>
        </div>
  
        {/* Profiles List */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-gray-700">
            Existing Profiles
          </h3>
          <div className="space-y-4 max-h-[400px] overflow-y-auto">
            {profiles.length === 0 ? (
              <p className="text-gray-500 text-center">No profiles available</p>
            ) : (
              profiles.map((profile) => (
                <div key={profile._id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg shadow">
                  <div>
                    <h3 className="font-bold text-gray-800">{profile.name}</h3>
                    <p className="text-gray-500 text-sm">{profile.address}</p>
                  </div>
                  <div className="flex gap-2 mt-2 sm:mt-0">
                    <button onClick={() => handleEdit(profile)} className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                      ✏️ Edit
                    </button>
                    <button onClick={() => handleDelete(profile._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default AdminPanel;
