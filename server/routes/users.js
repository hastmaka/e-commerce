const Op = require('sequelize').Op;
const models = require('../models');
const crud = require("../helpers/Crud");
const {handleDataToReturn, errorHandler} = require("../helpers/helpers");

module.exports = {
    list(req, res) {
        // debugger
        models.user.findOne({
            where: {
                user_id: req.query.user_id
            }
        }).then(result =>
            res.json(handleDataToReturn(result))
        ).catch(err => {
            errorHandler(400, err.message, res)
        })
    },

    auth(req, res) {
        if (!req.body) {
            return res.json({
                status: 400,
                message: 'Missing cart id',
                success: false
            });
        }

        models.user.findOne({
            where: {
                user_uid: {
                    [Op.eq]: req.body.authenticatedUser.uid
                }
            }
        }).then(user => {
            user.update({
                user_firebase_token: req.body.user.idToken
            })
            user.dataValues.user_firebase_token = req.body.user.idToken;
            crud.findCartByUser(user.user_id).then(cart => {
                res.json(handleDataToReturn({cart: cart || null, user: user}));
            }).catch(err => {
                errorHandler(400, err.message, res)
            })
        }).catch(err => {
            errorHandler(400, err.message, res)
        })
    },

    create(req, res) {
        if (!req.body) {
            return res.json({
                status: 400,
                message: 'Missing cart id',
                success: false
            });
        }
        models.user.create(req.body).then(result => {
            res.json(handleDataToReturn({result}))
        }).catch(err => {
            errorHandler(400, err.message, res)
        })
    },

    update(req, res) {
        if (!req.body) {
            return res.json({
                status: 400,
                message: 'Missing Arguments',
                success: false
            });
        }

        models.link.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
        }, {
            where: {
                link_id: req.body.link_id
            }
        })
            .then((result) => {
                res.json(handleDataToReturn(result))
            })
            .catch(err => {
                errorHandler(400, err.message, res)
            })

    },
}