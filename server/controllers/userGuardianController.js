'use strict';

const firebase = require('../db');
const UserGuardian = require('../models/userGuardian');
const firestore = firebase.firestore();

const addUserGuardian = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('User Guardian').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllUserGuardian = async (req,res,next) =>{
    try{
        const userGuardians = await firestore.collection('User Guardian');
        const data = await userGuardians.get();
        const userGuardianArray = [];
        
        if(data.empty){
            res.status(404).send('No guardian record found');
        }else{
            data.forEach(doc =>{
                const userGuardian = new UserGuardian(
                    doc.id,
                    doc.data().relationship
                );
                userGuardianArray.push(userGuardian);
            });
            res.send(userGuardianArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getUserGuardian = async (req, res, next) => {
    try{
        const id = req.params.id;
        const userGuardian = await firestore.collection('User Guardian').doc(id);
        const data = await userGuardian.get();

        if(!data.exists){
            res.status(404).send('User guardian with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateUserGuardian = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const userGuardian = await firestore.collection('User Guardian').doc(id);
        await userGuardian.update(data);
        res.send('User guardian record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteUserGuardian = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('User Guardian').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUserGuardian,
    getAllUserGuardian,
    getUserGuardian,
    updateUserGuardian,
    deleteUserGuardian
}