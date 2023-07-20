const express = require('express');
const {addGender,getAllGender, getGender, updateGender, deleteGender} = require('../controllers/genderController');

const router = express.Router();
router.post('/gender', addGender);
router.get('/genders', getAllGender);
router.get('/gender/:id', getGender);
router.put('/update/gender/:id', updateGender);
router.delete('/delete/gender/:id', deleteGender);

module.exports = {
    routes:router
}