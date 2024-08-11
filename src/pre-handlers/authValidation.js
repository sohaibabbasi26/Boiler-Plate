const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    method: Joi.string().min(2).required(),
    user_role:Joi.string().min(2).required(),
})

const registerSchema = Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    contact_no: Joi.string().min(11).max(50),
    method: Joi.string().min(2).required(),
    user_role:Joi.string().min(2).required(),
    client_location: Joi.string().min(2)
});


const validateRegister = (request, reply, done) => {
    try {
        const { error } = registerSchema.validate(request.body);
        if (error) {
            return reply.status(400).send(error.details[0].message);
        }
        done();
    }catch(e){
        console.log("ERR:",e)
    }
};


const validateLogin = (request, reply, done) => {
    try {
        const { error } = loginSchema.validate(request.body);
        if (error) {
            return reply.status(400).send(error.details[0].message);
        }
        done();
    }catch(e){
        console.log("ERR:",e)
    }
};

module.exports = {
    validateRegister,
    validateLogin,
}