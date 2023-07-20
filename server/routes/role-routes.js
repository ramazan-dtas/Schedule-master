const express = require('express');
const { addRole, getAllRole, getRole, updateRole, deleteRole } = require('../controllers/roleController');

const router = express.Router();
router.post('/role', addRole);
router.get('/roles', getAllRole);
router.get('/role/:id', getRole);
router.put('/update/role/:id', updateRole);
router.delete('/delete/role/:id', deleteRole);

module.exports = {
    routes:router
}