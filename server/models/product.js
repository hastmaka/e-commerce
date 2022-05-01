module.exports = (sequelize, dataTypes) => {
    const Model = sequelize.define('product', {
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_name: dataTypes.STRING,
        product_price: dataTypes.FLOAT,
        product_discount: dataTypes.INTEGER,
        product_description: dataTypes.TEXT
    },{
        underscored: true,
        timestamps: false,
    });

    Model.associate = (models) => {
        Model.hasMany(models.image, {foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
        Model.hasMany(models.review, {foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
        Model.belongsToMany(models.size, { foreignKey: 'product_product_id', through: models.product_size_map, onDelete: "NO ACTION", onUpdate: "NO ACTION" });
        Model.hasMany(models.product_size_map, {foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

    }

    return Model;
}

