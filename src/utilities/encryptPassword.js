const bcrypt = require('bcrypt');

async function encryptPasword(password) {
    const saltRounds = 10; // You can adjust the salt rounds as needed
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        console.error('Error hashing password:', error);
        throw error;
    }
}

module.exports = {
    encryptPasword
}