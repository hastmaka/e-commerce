const Op = require('sequelize').Op;
const models = require('../models');
const {getUserByToken} = require("./authValidator");


module.exports = function (req, res, next) {
  if (req.method === 'OPTIONS') {
    console.log('OPTIONS SUCCESS');
    return res.end();
  }

  getUserByToken(req.body.user.idToken).then(firebaseUser => {
    if (!firebaseUser) {
      res.status(401);
      return res.json({
        success: false,
        status: 401,
        message: "User Does Not Exist in Firebase"
      });
    }
    //compare the exp time with actual time, if exp > than now u can continue else resolve expire token
    if (firebaseUser.exp < Math.floor(Date.now() / 1000)) {
      res.status(401);
      return res.json({
        success: false,
        status: 401,
        message: "Unauthorized Token"
      });
    }
    req.body.authenticatedUser = firebaseUser;
    next();
  }).catch(err => {
    res.status(err.code);
    return res.json({
      success: false,
      status: err.code,
      message: err.error
    });
  });
};





