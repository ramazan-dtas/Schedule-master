'use strict';

const firebase = require('../db');
const UserInfo = require('../models/userInfo');
const firestore = firebase.firestore();

const addUserInfo = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('User Information').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllUserInfos = async (req,res,next) =>{
    try{
        const users = await firestore.collection('User Information');
        const data = await users.get();
        const userArray = [];
        
        if(data.empty){
            res.status(404).send('No user record found');
        }else{
            data.forEach(doc =>{
                const user = new UserInfo(
                    doc.id,
                    doc.data().name,
                    doc.data().last_name,
                    doc.data().phone,
                    doc.data().date_of_birth,
                    doc.data().address,
                    doc.data().update_at,
                    doc.data().created_at

                );
                userArray.push(user);
            });
            res.send(userArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getUserInfo = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await firestore.collection('User Information').doc(id);
        const data = await user.get();

        if(!data.exists){
            res.status(404).send('Student with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateUserInfo = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const user = await firestore.collection('User Information').doc(id);
        await user.update(data);
        res.send('User record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteUserInfo = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('User Information').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUserInfo,
    getAllUserInfos,
    getUserInfo,
    updateUserInfo,
    deleteUserInfo
}