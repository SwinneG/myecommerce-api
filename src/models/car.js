
module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: { msg: 'Name cannot be empty' },
                notNull: { msg: 'Name is a required property' }
            }
        },
        power: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nb_horses: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nb_kms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        first_registration_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        nb_seating_places: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        nb_doors: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        co2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        regular_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        tableName: 'cars'
    })

    return Car
}