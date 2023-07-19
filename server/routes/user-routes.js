const express = require('express');
const {addUser,getAllUsers, getUser, updateUser, deleteUser} = require('../controllers/userController');

const router = express.Router();
router.post('/user', addUser);
router.get('/users', getAllUsers);
router.get('/user/:id', getUser);
router.put('/update/user/:id', updateUser);
router.delete('/delete/user/:id', deleteUser)

module.exports = {
    routes:router
}