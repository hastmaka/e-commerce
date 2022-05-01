module.exports = (sequelize, dataTypes) => {
    const link = sequelize.define('link', {
        link_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        link_name: dataTypes.STRING,
        link_href: dataTypes.STRING
    },{
        underscored: true,
        timestamps: false,
    });

    return link;
}

