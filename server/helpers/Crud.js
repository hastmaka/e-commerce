const models = require("../models");
const {Op} = require("sequelize");
const findCartByUser = (user_id) => {
  return new Promise(function (resolve, reject) {
    models.cart.findAll({
      where: {
        user_user_id: {
          [Op.eq]: user_id
        }
      },
      include: [{
        model: models.product,
      },{
        model: models.size,
      },{
        model: models.image,
        where: {
          image_main: {
            [Op.eq]: true
          }
        }
      }]
    })
      .then(result => {
        resolve(result)
      })
      .catch(err => {
        reject(err)
      })
  });
}

module.exports = {findCartByUser};