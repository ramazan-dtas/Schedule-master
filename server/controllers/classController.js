'use strict';

const firebase = require('../db');
const Class = require('../models/class');
const firestore = firebase.firestore();

const addClass = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('Class').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllClass = async (req,res,next) =>{
    try{
        const classs = await firestore.collection('Class');
        const data = await classs.get();
        const classArray = [];
        
        if(data.empty){
            res.status(404).send('No class record found');
        }else{
            data.forEach(doc =>{
                const clas = new Class(
                    doc.id,
                    doc.data().class_name,
                    doc.data().created_at,
                    doc.data().location
                );
                classArray.push(clas);
            });
            res.send(classArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getClass = async (req, res, next) => {
    try{
        const id = req.params.id;
        const clas = await firestore.collection('Class').doc(id);
        const data = await clas.get();

        if(!data.exists){
            res.status(404).send('Class with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateClass = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const clas = await firestore.collection('Class').doc(id);
        await clas.update(data);
        res.send('Class record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteClass = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('Class').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addClass,
    getAllClass,
    getClass,
    updateClass,
    deleteClass
}