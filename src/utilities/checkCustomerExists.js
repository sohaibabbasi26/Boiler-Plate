const Customer = require('../models/customer');
const { Op } = require('sequelize');


const checkCustomerInDb = async (email, method) => {
    try {
        const customer = await Customer.findOne({
            where: {
                email:email
            }
        });
        if(method === 'signup'){
            if(customer){
                return true;
            } else{
                return false;
            }
        } else if(method === 'login'){
            if(customer){
                return customer;
            } else{
                return "Couldn't find any customer";
            }
        }

        if(customer){
            return true;
        } else{
            return 'No such customer is available.';
        }

    } catch (error) {
        console.error("ERROR WHILE CHECKING:", error);
        throw error; 
    }
};

module.exports = { checkCustomerInDb }