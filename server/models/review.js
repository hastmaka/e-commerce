module.exports = (sequelize, dataTypes) => {
  const Model = sequelize.define('review', {
    review_id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_product_id: dataTypes.INTEGER,
    user_user_id: dataTypes.INTEGER,
    review_comment: dataTypes.STRING,
    review_rating: dataTypes.INTEGER,
    created_at: {
      type: 'TIMESTAMP',
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false
    }
  },{
    underscored: true,
    timestamps: false,
  });

  Model.associate = (models) => {
    Model.belongsTo(models.product, { foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
    Model.belongsTo(models.user, { foreignKey: 'user_user_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });

    // Model.hasMany(models.product_size_map, {foreignKey: 'size_size_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
  }

  return Model;
}