const express = require('express');
const { getAllUserGuardian, getUserGuardian, updateUserGuardian, deleteUserGuardian, addUserGuardian } = require('../controllers/userGuardianController');

const router = express.Router();
router.post('/userguardian', addUserGuardian);
router.get('/userguardians', getAllUserGuardian);
router.get('/userguardian/:id', getUserGuardian);
router.put('/update/userguardian/:id', updateUserGuardian);
router.delete('/delete/userguardian/:id', deleteUserGuardian);

module.exports = {
    routes:router
}