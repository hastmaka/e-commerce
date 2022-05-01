module.exports = (sequelize, dataTypes) => {
    const Model = sequelize.define('image', {
        image_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        image_main: dataTypes.BOOLEAN,
        image_name: dataTypes.STRING,
        image_url: dataTypes.STRING,
    },{
        underscored: true,
        timestamps: false,
    });

    Model.associate = (models) => {
        Model.belongsTo(models.product, { foreignKey: 'product_product_id', onDelete: 'NO ACTION', onUpdate: 'NO ACTION' });
    }

    return Model;
}