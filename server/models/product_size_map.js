module.exports = (sequelize, dataTypes) => {
    const Model = sequelize.define('product_size_map', {
        product_size_stock: dataTypes.INTEGER,
        color_color_id: dataTypes.STRING
    },{
        underscored: true,
        timestamps: false,
    });

    Model.associate = (models) => {
        Model.belongsTo(models.product, {foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
        Model.belongsTo(models.size, {foreignKey: 'size_size_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
    }
    return Model;
};