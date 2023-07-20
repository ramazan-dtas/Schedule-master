'use strict';

const firebase = require('../db');
const Role = require('../models/role');
const firestore = firebase.firestore();

const addRole = async(req, res, next) =>{
    try{
        const data = req.body;
        await firestore.collection('Role').doc().set(data);
        res.send('Record saved successfully');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getAllRole = async (req,res,next) =>{
    try{
        const roles = await firestore.collection('Role');
        const data = await roles.get();
        const roleArray = [];
        
        if(data.empty){
            res.status(404).send('No role record found');
        }else{
            data.forEach(doc =>{
                const role = new Role(
                    doc.id,
                    doc.data().name,
                    doc.data().created_At,
                );
                roleArray.push(role);
            });
            res.send(roleArray);
        }
    }catch (error){
        res.status(400).send(error.message);
    }
}

const getRole = async (req, res, next) => {
    try{
        const id = req.params.id;
        const role = await firestore.collection('Role').doc(id);
        const data = await role.get();

        if(!data.exists){
            res.status(404).send('Role with the given ID not found');
        }else{
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

const updateRole = async (req,res,next) =>{
    try{
        const id = req.params.id;
        const data = req.body;
        const role = await firestore.collection('Role').doc(id);
        await role.update(data);
        res.send('Role record updated successfuly');
    }catch(error){
        res.status(400).send(error.message);
    }
}

const deleteRole = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('Role').doc(id).delete();
        res.send('Record deleted Successfuly');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addRole,
    getAllRole,
    getRole,
    updateRole,
    deleteRole
}