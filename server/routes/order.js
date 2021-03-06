const Op = require('sequelize').Op;
const models = require('../models');
const crud = require('../helpers/Crud')
const {handleDataToReturn, errorHandler} = require("../helpers/helpers");


module.exports = {
    orderId(req, res) {
        if (!req.params.id) {
            return res.json({
                status: 400,
                message: 'Missing cart id',
                success: false
            });
        }
        //findByPk - find by primary key
        models.order.findByPk(req.params.id, {
            include: [
                {model: models.product},
                {model: models.size},
                {model: models.image}
            ],

        }).then(result => {
                res.json(handleDataToReturn(result))
            }
        ).catch(err => {
            errorHandler(400, err.message, res)
        })
    },

    orderAll(req, res) {
        if (!req.params.user_user_id) {
            return res.json({
                status: 400,
                message: 'Missing cart id',
                success: false
            });
        }

        crud.findCartByUser(req.params.user_user_id)
            .then(result => {
                res.json(handleDataToReturn(result))
            })
            .catch(err => {
                errorHandler(400, err.message, res)
            })
    },

    create(req, res) {
        if (!req.body) {
            return res.json({
                status: 400,
                message: 'Missing Arguments',
                success: false
            });
        }

        let {
            image_image_id,
            product_product_id,
            size_size_id,
            color_color_id,
            cart_product_quantity,
            user_user_id
        } = req.body;

        models.order.findOne({
            where: {
                product_product_id: {
                    [Op.eq]: product_product_id
                },
                size_size_id: {
                    [Op.eq]: size_size_id
                },
                color_color_id: {
                    [Op.eq]: color_color_id
                },
                user_user_id: {
                    [Op.eq]: user_user_id
                }
            }
        }).then(result => {
            if (!result) {
                models.order.create(req.body)
                    .then(() => {
                        crud.findCartByUser(user_user_id)
                            .then(results => {
                                res.json(handleDataToReturn(results))
                            })
                            .catch(err => {
                                errorHandler(400, err.message, res)
                            })
                    })
                    .catch(err => {
                        errorHandler(400, err.message, res)
                    });
            } else {
                let req_cart_product_quantity = result.dataValues.cart_product_quantity;
                models.order.update(
                    {cart_product_quantity: cart_product_quantity + req_cart_product_quantity},
                    {
                        where: {
                            order_id: {
                                [Op.eq]: result.order_id
                            }
                        }
                    }
                ).then(() => {
                    crud.findCartByUser(user_user_id)
                        .then(results => {
                            res.json(handleDataToReturn(results))
                        })
                        .catch(err => {
                            errorHandler(400, err.message, res)
                        })
                }).catch(err => {
                    errorHandler(400, err.message, res)
                })
            }
        }).catch(err => {
            errorHandler(400, err.message, res)
        })
    },
    //
    // update: function (req, res) {
    //   if (!req.body) {
    //     return res.json({
    //       status: 400,
    //       message: 'Missing Arguments',
    //       success: false
    //     });
    //   }
    //
    //   models.link.update({
    //     first_name: req.body.first_name,
    //     last_name: req.body.last_name,
    //     phone_number: req.body.phone_number,
    //   }, {
    //     where: {
    //       link_id: req.body.link_id
    //     }
    //   })
    //     .then((result) => {
    //       res.json(handleDataToReturn(result))
    //     })
    //     .catch(err => {
    //       console.log(err)
    //     })
    //
    // },
    //
    delete: function (req, res) {
        if (!req.params.order_id) {
            return res.json({
                status: 400,
                message: 'Missing Arguments',
                success: false
            });
        }

        models.order.destroy({
            where: {
                order_id: req.params.order_id
            }
        })
            .then(result => {
                res.json(handleDataToReturn(result))
            })
            .catch(err => {
                console.log(err)
            })
    },
};