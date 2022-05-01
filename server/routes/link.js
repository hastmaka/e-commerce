const Op = require('sequelize').Op;
const models = require('../models');
const {handleDataToReturn} = require("../helpers/helpers");

module.exports = {
    list (req, res) {
        models.link.findAll()
            .then(result =>
                res.json(handleDataToReturn(result))
            ).catch(err => {
                console.log(err)
            })
    },

    // listId: function (req, res) {
    //     models.link.findOne({
    //         where: {
    //             link_id: req.params.id
    //         }
    //         }).then(result =>
    //             res.json(handleDataToReturn(result))
    //         ).catch(err => {
    //             console.log(err)
    //         })
    // },

    // create: function (req, res) {
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
    // update: function (req, res) {
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
    // delete: function (req, res) {
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
    //         })
    //         .then((result) => {
    //             res.json(handleDataToReturn(result))
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // },
};