
const Car = require('./car');

module.exports = (sequelize, DataTypes) => {
    const carImage = sequelize.define('CarImage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: DataTypes.BLOB('long'),
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Le nom ne peut pas être vide' },
                notNull: { msg: 'Le nom est une propriété requise' }
            }
        },
        //not mandatory
        // carId: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'cars', 
        //         key: "id"
        //     }
        // }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
        tableName: 'carImages'
    })

    return carImage
}