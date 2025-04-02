const Profile = require("../models/profiles");

// Get all profiles
const getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get a single profile by ID
const getProfileById = async (req, res) => {
  try {
    console.log("Fetching profile with ID:", req.params.id); // Log ID for debugging

    const profile = await Profile.findById(req.params.id);
    
    if (!profile) {
      console.log("Profile not found:", req.params.id);
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(profile);
  } catch (error) {
    console.error("Error fetching profile:", error); // Log the exact error
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Create a new profile
const createProfile = async (req, res) => {
  try {
    const { name, photo, description, address, latitude, longitude, email, qualification, interest } = req.body;
    const newProfile = new Profile({ name, photo, description, address, latitude, longitude, email, qualification, interest });
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(500).json({ message: "Error creating profile" });
  }
};

// Delete a profile
const deleteProfile = async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting profile" });
  }
};

// Update a profile by ID
const updateProfile = async (req, res) => {
  try {
    const updatedProfile = await Profile.findByIdAndUpdate(
      req.params.id,
      req.body, 
      { new: true, runValidators: true } // Returns updated doc & validates input
    );
    
    if (!updatedProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ message: "Error updating profile" });
  }
};

module.exports = { getProfiles, createProfile, deleteProfile, getProfileById, updateProfile };
