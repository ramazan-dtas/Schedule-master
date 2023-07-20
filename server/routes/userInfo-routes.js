const express = require('express');
const {addUserInfo,getAllUserInfos, getUserInfo, updateUserInfo, deleteUserInfo} = require('../controllers/userInfoController');


const router = express.Router();
router.post('/user-information', addUserInfo);
router.get('/user-informations', getAllUserInfos);
router.get('/user-information/:id', getUserInfo);
router.put('/update/user-information/:id', updateUserInfo);
router.delete('/delete/user-information/:id', deleteUserInfo);

module.exports = {
    routes:router
}