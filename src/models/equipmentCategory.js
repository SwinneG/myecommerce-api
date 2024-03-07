module.exports = (sequelize, DataTypes) => {
    const EquipmentCategory =  sequelize.define('EquipmentCategory', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false,
      tableName: 'equipmentCategories'
    })

    return EquipmentCategory
  }