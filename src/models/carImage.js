
const Car = require('./car');

module.exports = (sequelize, DataTypes) => {
    const carImage = sequelize.define('CarImage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Image path cannot be empty' },
                notNull: { msg: 'Image path is a required property' }
            }
        },
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
        tableName: 'carImages'
    })

    return carImage
}