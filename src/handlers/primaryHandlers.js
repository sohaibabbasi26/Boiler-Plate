const services = require('../services/primaryServices');
const { checkAdminInDb } = require('../utilities/checkAdminInDb');
const { checkClientInDb } = require('../utilities/checkClientInDb');
const { checkCustomerInDb } = require('../utilities/checkCustomerExists');

async function serverCheck(req, res) {
    try {
        res.send("SERVER IS RUNNING!")
    }
    catch (err) {
        console.log("ERROR:", err);
        return;
    }
}

async function signup(req, res) {
    try {
        const data = req?.body;
        console.log("data:", data);
        if (data?.user_role === 'customer') {
            const result = await services.customerSignup(data);
            res.send(result);
        }
        else if (data?.user_role === 'client') {
            const result = await services.clientSignup(data);
            res.send(result);
        }
        else if (data?.user_role === 'admin') {
            const result = await services.adminSignup(data);
            res.send(result);
        }
    }
    catch (err) {
        console.log("ERROR:", err);
        return;
    }
}



async function login(req, res) {
    try {
        const data = req?.body;
        console.log("data:", data);

        if (data?.user_role === 'customer') {
            const result = await services.customerLogin(data);
            res.send(result);
        }
        else if (data?.user_role === 'client') {
            const result = await services.clientLogin(data);
            res.send(result);
        }
        else if (data?.user_role === 'admin') {
            const result = await services.adminLogin(data);
            res.send(result);
        }
    }
    catch (err) {
        console.log("ERROR:", err);
        return;
    }
}


module.exports = {
    serverCheck,
    signup,
    login,
}  