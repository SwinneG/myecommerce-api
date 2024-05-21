module.exports = (sequelize, DataTypes) => {
    const CarEquipment  =  sequelize.define('CarEquipment', {
        carId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'cars',
                key: 'id'
            }
        },
        equipmentId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'equipments',
                key: 'id'
            }
        },
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        tableName: 'carequipments',
    })

    return CarEquipment 
  }