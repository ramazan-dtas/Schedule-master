'use strict';

const firebase = require('../db');
const Institution = require('../models/institution');
const firestore = firebase.firestore();

const addInstitution = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('Institution').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllInstitution = async (req,res,next) =>{
    try{
        const institutions = await firestore.collection('Institution');
        const data = await institutions.get();
        const institutionArray = [];
        
        if(data.empty){
            res.status(404).send('No institution record found');
        }else{
            data.forEach(doc =>{
                const institution = new Institution(
                    doc.id,
                    doc.data().name,
                    doc.data().address,
                );
                institutionArray.push(institution);
            });
            res.send(institutionArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getInstitution = async (req, res, next) => {
    try{
        const id = req.params.id;
        const institution = await firestore.collection('Institution').doc(id);
        const data = await institution.get();

        if(!data.exists){
            res.status(404).send('Institution with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateInstitution = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const institution = await firestore.collection('Institution').doc(id);
        await institution.update(data);
        res.send('Institution record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteInstitution = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('Institution').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addInstitution,
    getAllInstitution,
    getInstitution,
    updateInstitution,
    deleteInstitution
}