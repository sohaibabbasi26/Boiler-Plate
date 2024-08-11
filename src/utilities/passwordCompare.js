const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function comparePassword(password, hashedPassword) {
    try {
        console.log("password:",password,"\n hashedPassword:",hashedPassword);
        const match = await bcrypt.compare(password, hashedPassword);
        console.log('match:',match);
        return match;
    } catch (error) {
        console.error('Error comparing passwords:', error);
        throw new Error('Error comparing passwords');
    }
}

module.exports = {
    comparePassword
}