'use strict';

const firebase = require('../db');
const User = require('../models/user');
const firestore = firebase.firestore();

const addUser = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('User').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllUsers = async (req,res,next) =>{
    try{
        const users = await firestore.collection('User');
        const data = await users.get();
        const userArray = [];
        
        if(data.empty){
            res.status(404).send('No user record found');
        }else{
            data.forEach(doc =>{
                const user = new User(
                    doc.id,
                    doc.data().surname,
                    doc.data().email,
                    doc.data().passwordHash,
                    doc.data().emailConfirmed,
                    doc.data().lockoutEnabled,
                    doc.data().phoneConfirmed,
                    doc.data().twofactorEnable,
                    doc.data().tryFailedCount,
                    doc.data().lockoutEnd

                );
                userArray.push(user);
            });
            res.send(userArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getUser = async (req, res, next) => {
    try{
        const id = req.params.id;
        const user = await firestore.collection('User').doc(id);
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

const updateUser = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const user = await firestore.collection('User').doc(id);
        await user.update(data);
        res.send('User record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteUser = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('User').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}