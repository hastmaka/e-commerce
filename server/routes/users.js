const Op = require('sequelize').Op;
const models = require('../models');
const crud = require("../helpers/Crud");
const {handleDataToReturn} = require("../helpers/helpers");

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
      console.log(err)
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
        console.log(err)
      })
    }).catch(err => {
      console.log(err)
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
      console.log(err);
    })
  }
}