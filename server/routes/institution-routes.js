const express = require('express');
const { addInstitution, getAllInstitution, getInstitution, updateInstitution, deleteInstitution } = require('../controllers/institutionController');

const router = express.Router();
router.post('/institution', addInstitution);
router.get('/institutions', getAllInstitution);
router.get('/institution/:id', getInstitution);
router.put('/update/institution/:id', updateInstitution);
router.delete('/delete/institution/:id', deleteInstitution);

module.exports = {
    routes:router
}