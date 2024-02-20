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

    Chassis.associate = function (models) {
        Chassis.hasMany(models.Car);
    }

    return Chassis
  }