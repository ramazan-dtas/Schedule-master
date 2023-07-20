'use strict';

const firebase = require('../db');
const City = require('../models/city');
const firestore = firebase.firestore();

const addCity = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('City').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllCity = async (req,res,next) =>{
    try{
        const citys = await firestore.collection('City');
        const data = await citys.get();
        const cityArray = [];
        
        if(data.empty){
            res.status(404).send('No city record found');
        }else{
            data.forEach(doc =>{
                const city = new City(
                    doc.id,
                    doc.data().city_name,
                    doc.data().post_code,
                );
                cityArray.push(city);
            });
            res.send(cityArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getCity = async (req, res, next) => {
    try{
        const id = req.params.id;
        const city = await firestore.collection('City').doc(id);
        const data = await city.get();

        if(!data.exists){
            res.status(404).send('City with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateCity = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const city = await firestore.collection('City').doc(id);
        await city.update(data);
        res.send('City record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteCity = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('City').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addCity,
    getAllCity,
    getCity,
    updateCity,
    deleteCity
}