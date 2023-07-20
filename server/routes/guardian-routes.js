const express = require('express');
const { getAllGuardian, getGuardian, updateGuardian, deleteGuardian, addGuardian } = require('../controllers/guardianController');

const router = express.Router();
router.post('/guardian', addGuardian);
router.get('/guardians', getAllGuardian);
router.get('/guardian/:id', getGuardian);
router.put('/update/guardian/:id', updateGuardian);
router.delete('/delete/guardian/:id', deleteGuardian);

module.exports = {
    routes:router
}