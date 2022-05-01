module.exports = (sequelize, dataTypes) => {
  const Model = sequelize.define('user', {
    user_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    user_email: dataTypes.STRING,
    user_first_name: dataTypes.STRING,
    user_last_name: dataTypes.STRING,
    user_address: dataTypes.STRING,
    user_phone: dataTypes.STRING,
    user_firebase_token: dataTypes.TEXT,
    user_uid: dataTypes.STRING
  },{
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
    Model.hasOne(models.cart, { foreignKey: 'user_user_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
    Model.hasOne(models.review, { foreignKey: 'user_user_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });

    // Model.hasMany(models.product_size_map, {foreignKey: 'size_size_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
  }

  return Model;
}