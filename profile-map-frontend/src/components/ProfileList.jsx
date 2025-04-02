import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProfileCard from './ProfileCard';

const ProfileList = ({ searchTerm, setSelectedLocation }) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await api.get('/profiles');
        setProfiles(res.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfiles();
  }, []);

  if (loading) {
    return <div>Loading profiles...</div>;
  }

  // 🔍 Filter Profiles Based on `searchTerm`
  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredProfiles.length > 0 ? (
        filteredProfiles.map(profile => (
          <ProfileCard key={profile._id} profile={profile} setSelectedLocation={setSelectedLocation} />
        ))
      ) : (
        <p className="text-gray-500 text-center">No profiles found.</p>
      )}
    </div>
  );
};

export default ProfileList;
