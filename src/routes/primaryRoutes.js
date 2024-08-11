const primaryHandlers = require('../handlers/primaryHandlers');
const authValidation = require('../pre-handlers/authValidation');

const routes = [
    {
        method: 'GET',
        url: '/',
        handler: primaryHandlers.serverCheck
    },
    {
        method:'POST',
        url:'/signup',
        handler: primaryHandlers.signup,
        preHandler: authValidation.validateRegister
    },
    {
        method:'POST',
        url:'/login',
        handler:primaryHandlers.login,
        preHandler:authValidation.validateLogin
    },
];

module.exports = {routes};
