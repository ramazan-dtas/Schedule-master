const express = require('express');
const {addClass,getAllClass, getClass, updateClass, deleteClass} = require('../controllers/classController');

const router = express.Router();
router.post('/class', addClass);
router.get('/all-class', getAllClass);
router.get('/class/:id', getClass);
router.put('/update/class/:id', updateClass);
router.delete('/delete/class/:id', deleteClass)

module.exports = {
    routes:router
}