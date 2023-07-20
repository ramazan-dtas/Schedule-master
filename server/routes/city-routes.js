const express = require('express');
const {addCity,getAllCity, getCity, updateCity, deleteCity} = require('../controllers/cityController');

const router = express.Router();
router.post('/city', addCity);
router.get('/citys', getAllCity);
router.get('/city/:id', getCity);
router.put('/update/city/:id', updateCity);
router.delete('/delete/city/:id', deleteCity);

module.exports = {
    routes:router
}