module.exports = (sequelize, DataTypes) => {
    const Chassis =  sequelize.define('Chassis', {
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
      tableName: 'chassis'
    })

    return Chassis
  }