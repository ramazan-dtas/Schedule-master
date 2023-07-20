'use strict';

const firebase = require('../db');
const Gender = require('../models/gender');
const firestore = firebase.firestore();

const addGender = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('Gender').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllGender = async (req,res,next) =>{
    try{
        const genders = await firestore.collection('Gender');
        const data = await genders.get();
        const genderArray = [];
        
        if(data.empty){
            res.status(404).send('No city record found');
        }else{
            data.forEach(doc =>{
                const gender = new Gender(
                    doc.id,
                    doc.data().gender_name,
                );
                genderArray.push(gender);
            });
            res.send(genderArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getGender = async (req, res, next) => {
    try{
        const id = req.params.id;
        const gender = await firestore.collection('Gender').doc(id);
        const data = await gender.get();

        if(!data.exists){
            res.status(404).send('Gender with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateGender = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const gender = await firestore.collection('Gender').doc(id);
        await gender.update(data);
        res.send('Gender record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteGender = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('Gender').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addGender,
    getAllGender,
    getGender,
    updateGender,
    deleteGender
}