const Op = require('sequelize').Op;
const models = require('../models');
const {handleDataToReturn} = require("../helpers/helpers");
const {Sequelize} = require("sequelize");

module.exports = {
    create(req, res, next) {
        if (!req.body) {
            return res.json({
                status: 400,
                message: 'Missing Arguments',
                success: false
            });
        }
        models.review.create(req.body).then(review => {
            debugger
            models.review.findOne({
                where: {
                    review_id: {
                        [Op.eq]: review.review_id
                    },
                },
                include: [{
                    model: models.user,
                    attributes: ['user_email']
                }]
            }).then(result => {
                res.json(handleDataToReturn({result}))
            })
        }).catch(e => {
            next(e);
        })
    },

    getReviewsByProductId(req, res) {
        if (!req.params) {
            return res.json({
                status: 400,
                message: 'Missing Arguments',
                success: false
            });
        }
        models.review.findAll({
            where: {
                product_product_id: {
                    [Op.eq]: req.params.productId
                },
            },
            include: [{
                model: models.user,
                attributes: ['user_email']
            }]
        }).then(result => {
            res.json(handleDataToReturn(result));
        }).catch(e => {
            console.log(e)
        })
    },

    getAvg(req, res) {
        if (!req.params) {
            return res.json({
                status: 400,
                message: 'Missing Arguments',
                success: false
            });
        }
        models.review.findOne({
            where: {
                product_product_id: {
                    [Op.eq]: req.params.product_id
                }
            },
            attributes: [
                [Sequelize.fn('AVG', Sequelize.col('review_rating')), 'average'],
            ],
        }).then(result => {
            res.json(handleDataToReturn(result));
        })
            .catch(err => {
                console.log(err)
            })
    },

}