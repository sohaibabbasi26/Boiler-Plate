const Client = require('../models/client');
const { Op } = require('sequelize');


const checkClientInDb = async (email, method) => {
    try {
        const client = await Client.findOne({
            where: {
                email:email
            }
        });
        if(method === 'signup'){
            if(client){
                return true;
            } else{
                return false;
            }
        } else if(method === 'login'){
            if(client){
                return client;
            } else{
                return "Couldn't find any client";
            }
        }
        
        if(client){
            return true;
        } else{
            return "No such client is available.";
        }


    } catch (error) {
        console.error("ERROR WHILE CHECKING:", error);
        throw error; 
    }
};

module.exports = { checkClientInDb }