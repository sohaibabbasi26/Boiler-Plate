const crypto = require('crypto');

const generateJwtSecret = () => {
    return crypto.randomBytes(32).toString('hex'); // 32 bytes (256 bits)
};

module.exports = {
    generateJwtSecret
}