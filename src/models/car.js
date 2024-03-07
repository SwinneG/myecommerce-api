
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
            unique: {
                msg: 'Le nom est déjà pris.'
            },
            validate: {
                notEmpty: { msg: 'Le nom ne peut pas être vide' },
                notNull: { msg: 'Le nom est une propriété requise' }
            }
        },
        pictures: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                isUrl: { msg: 'Utilisez uniquement une URL valide pour l\'image.' },
                notNull: { msg: 'L\'image est une propriété requise' }
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
        createdAt: 'created',
        updatedAt: false,
        tableName: 'cars'
    })

    return Car
}