const Admin = require('../models/admin');
const { Op } = require('sequelize');


const checkAdminInDb = async (email, method) => {
    try {
        const admin = await Admin.findOne({
            where: {
                email:email
            }
        });
        if(method === 'signup'){
            if(admin){
                return true;
            } else{
                return false;
            }
        } else if(method === 'login'){
            if(admin){
                return admin;
            } else{
                return "Couldn't find any customer";
            }
        }
        if(admin){
            return true;
        } else{
            return 'No such admin is available.';
        }
    } catch (error) {
        console.error("ERROR WHILE CHECKING:", error);
        throw error; 
    }
};

module.exports = { checkAdminInDb }