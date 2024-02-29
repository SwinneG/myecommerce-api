module.exports = (sequelize, DataTypes) => {
    const Equipment =  sequelize.define('Equipment', {
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
      tableName: 'equipments'
    })

    return Equipment
  }