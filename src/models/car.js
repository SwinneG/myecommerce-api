
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
        picture: {
            type: DataTypes.STRING,
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
        horses: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        kms: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        first_registration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        seating_places: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        doors: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        co2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fuel_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ext_color_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
       /* int_color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transmission: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chassis: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        equipment: {
            type: DataTypes.STRING,
            allowNull: false,
        }*/
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
        //tableName: 'cars'
    })

    Car.associate = function (models) {
        Car.belongsTo(models.Fuel, { foreignKey: 'fuel_id' });
        Car.belongsTo(models.ExtColor, { foreignKey: 'ext_color_id' });
    }

    return Car
}