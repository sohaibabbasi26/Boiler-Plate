const dataSource = require('../../configurations/postgreSQL');

const connectDb = async () => {
    try {
        await dataSource.initialize().then(() => {
            console.log("UPDATE: DATABASE CONNECTION HAS BEEN ESTABLISHED");
        }).catch((e) => {
            console.log("ERR: DB INITIALIZATION ERR:",e,'\n error src: src -> utilities -> dbConnections.js');
        });
    } catch (e){
        console.log("ERR: DB CONNECTION ERR:",e, '\n error src: src -> utilities -> dbConnections.js')
    }
}

module.exports = {
    connectDb
}