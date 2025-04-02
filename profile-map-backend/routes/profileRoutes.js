const express = require('express');
const { getProfiles, createProfile, deleteProfile, getProfileById, updateProfile } = require('../controllers/profileController');

const router = express.Router();

router.get('/profiles', getProfiles);
router.get('/profiles/:id', getProfileById);
router.post('/profiles', createProfile);
router.put('/profiles/:id', updateProfile); // 👈 Add this line
router.delete('/profiles/:id', deleteProfile);

module.exports = router;
