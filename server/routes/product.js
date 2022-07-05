const Op = require('sequelize').Op;
const models = require('../models');
const {Sequelize} = require("sequelize");
const {handleDataToReturn} = require("../helpers/helpers");

module.exports = {
    list(req, res) {
        models.product.findAll()
            .then(result =>
                res.json(handleDataToReturn(result))
            ).catch(err => {
            console.log(err)
        })
    },

    productAll(req, res) {
        models.product.findAll({
            include: [
                {model: models.review,
                    attributes: [
                        [Sequelize.fn('AVG', Sequelize.col('review_rating')), 'average'],
                    ],
                },
                {model: models.image,
                    where: {
                        image_main: {
                            [Op.eq]: true
                        }
                    }
                }
            ],
        })
            .then(result => {
                res.json(handleDataToReturn(result))
            })
            .catch(err => {
                console.log(err)
            })
    },

    productId(req, res) {
        if (!req.params.id) {
            return res.json({
                status: 400,
                message: 'Missing product id',
                success: false
            });
        }
        //findByPk - find by primary key
        models.product.findByPk(req.params.id, {
            include: [
                {model: models.image},
                {
                    model: models.size,
                    through: {
                        attributes: []
                    }

                },
                {
                    model: models.review,
                    include: [{
                        model: models.user,
                        attributes: ['user_email']
                    }]
                }
            ],

        }).then(result => {
                let sizes = result.sizes;
                let promises = [];
                for (let size of sizes) {
                    promises.push(models.product_size_map.findAll({
                        where: {
                            product_product_id: {
                                [Op.eq]: req.params.id
                            },
                            size_size_id: {
                                [Op.eq]: size.size_id
                            }
                        }
                    }))
                }
                Promise.all(promises)
                    .then(colors => {
                        for (let i in result.sizes) {
                            result.sizes[i].dataValues.colors = colors[i];
                            result.sizes[i].dataValues.active = (parseInt(i) === 0);
                        }
                        res.json(handleDataToReturn(result));
                    })

                    .catch((error) => {
                        res.status(400);
                        res.json({
                            status: 400,
                            message: error.message,
                            success: false
                        });
                    });
            }
        ).catch(err => {
            console.log(err);
        })
    },

    // create(req, res) {
    //     if (!req.body) {
    //         return res.json({
    //             status: 400,
    //             message: 'Missing Arguments',
    //             success: false
    //         });
    //     }
    //     models.link.create(req.body.link)
    //         .then((results) => {
    //             res.json({
    //                 data: results,
    //                 success: true
    //             });
    //         })
    //         .catch((error) => {
    //             res.status(400);
    //             res.json({
    //                 status: 400,
    //                 message: error.message,
    //                 success: false
    //             });
    //         });
    //
    // },
    //
    // update(req, res) {
    //     if (!req.body) {
    //         return res.json({
    //             status: 400,
    //             message: 'Missing Arguments',
    //             success: false
    //         });
    //     }
    //
    //     models.link.update({
    //         first_name: req.body.first_name,
    //         last_name: req.body.last_name,
    //         phone_number: req.body.phone_number,
    //     }, {
    //         where: {
    //             link_id: req.body.link_id
    //         }
    //     })
    //         .then((result) => {
    //             res.json(handleDataToReturn(result))
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //
    // },
    //
    // delete(req, res) {
    //     if (!req.params.id) {
    //         return res.json({
    //             status: 400,
    //             message: 'Missing Arguments',
    //             success: false
    //         });
    //     }
    //
    //     models.link.destroy({
    //         where: {
    //             link_id: req.params.id
    //         }
    //     })
    //         .then((result) => {
    //             res.json(handleDataToReturn(result))
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // },
};