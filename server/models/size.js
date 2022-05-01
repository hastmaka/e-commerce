module.exports = (sequelize, dataTypes) => {
    const Model = sequelize.define('size', {
        size_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        size_name: dataTypes.STRING
    },{
        underscored: true,
        timestamps: false,
    });

    Model.associate = (models) => {
        Model.belongsToMany(models.product, { foreignKey: 'size_size_id', through: models.product_size_map, onDelete: "NO ACTION", onUpdate: "NO ACTION" });
        Model.hasMany(models.product_size_map, {foreignKey: 'size_size_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});

        // Model.hasMany(models.cart, {foreignKey: 'cart', onDelete: 'NO ACTION', onUpdate: 'NO ACTION'});
    }

    return Model;
}