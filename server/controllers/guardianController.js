'use strict';

const firebase = require('../db');
const Guardian = require('../models/guardian');
const firestore = firebase.firestore();

const addGuardian = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('Guardian').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllGuardian = async (req,res,next) =>{
    try{
        const guardians = await firestore.collection('Guardian');
        const data = await guardians.get();
        const guardianArray = [];
        
        if(data.empty){
            res.status(404).send('No guardian record found');
        }else{
            data.forEach(doc =>{
                const guardian = new Guardian(
                    doc.id,
                    doc.data().full_name,
                    doc.data().phone,
                    doc.data().email
                );
                guardianArray.push(guardian);
            });
            res.send(guardianArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getGuardian = async (req, res, next) => {
    try{
        const id = req.params.id;
        const guardian = await firestore.collection('Guardian').doc(id);
        const data = await guardian.get();

        if(!data.exists){
            res.status(404).send('Guardian with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateGuardian = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const guardian = await firestore.collection('Guardian').doc(id);
        await guardian.update(data);
        res.send('Guardian record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteGuardian = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('Guardian').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addGuardian,
    getAllGuardian,
    getGuardian,
    updateGuardian,
    deleteGuardian
}