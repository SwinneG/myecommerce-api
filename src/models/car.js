
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
        int_color_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        transmission_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        brand_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        model_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        chassis_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        equipment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: true,
        createdAt: 'created',
        updatedAt: false,
        //tableName: 'cars'
    })

    Car.associate = function (models) {
        Car.belongsTo(models.Fuel, { foreignKey: 'fuel_id' });
        Car.belongsTo(models.ExtColor, { foreignKey: 'ext_color_id' });
        Car.belongsTo(models.IntColor, { foreignKey: 'int_color_id' });
        Car.belongsTo(models.Transmission, { foreignKey: 'transmission_id' });
        Car.belongsTo(models.Brand, { foreignKey: 'brand_id' });
        Car.belongsTo(models.Model, { foreignKey: 'model_id' });
        Car.belongsTo(models.State, { foreignKey: 'state_id' });
        Car.belongsTo(models.Chassis, { foreignKey: 'chassis_id' });
        Car.belongsTo(models.Equipment, { foreignKey: 'equipment_id' });
    }

    return Car
}