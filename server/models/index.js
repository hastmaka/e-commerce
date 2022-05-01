const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const fs = require('fs');
const path = require('path');
const db = {};


let sequelize = new Sequelize('e-commerce', 'root', 'Police123@', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306',
    dialectOptions: {
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: console.log
});
console.log('conn')

fs.readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".")!==0) && (file !== "index.js");
    })
    .forEach(function(file) {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;