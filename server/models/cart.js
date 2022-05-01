module.exports = (sequelize, dataTypes) => {
  const Model = sequelize.define('cart', {
    cart_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    color_color_id: dataTypes.INTEGER,
    cart_product_quantity: dataTypes.INTEGER
  },{
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.product, { foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
    Model.belongsTo(models.size, { foreignKey: 'size_size_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
    Model.belongsTo(models.image, { foreignKey: 'image_image_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
    Model.belongsTo(models.user, { foreignKey: 'user_user_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });

    // Model.hasMany(models.product_size_map, {foreignKey: 'size_size_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
  }

  return Model;
}