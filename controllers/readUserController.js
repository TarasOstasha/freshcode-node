const createError = require('http-errors');
const userApiPath = '../api/users.json';
const { logUsers } = require('./readFiles');
const fs = require('fs');

module.exports.readUsers = (req, res, next) => {
    try {
        const users = fs.readFileSync(userApiPath, { encoding: 'utf-8' });
        const usersObj = JSON.parse(users);
        res.status(200).send(usersObj);
    } catch (error) {
        //res.status(500).json({status: error, msg: 'Internal Server Error'}); // old version
        return next(createError(404, 'Internal Server Error'));
    }
    // async method
    logUsers(userApiPath)
};


