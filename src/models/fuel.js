module.exports = (sequelize, DataTypes) => {
    const Fuel =  sequelize.define('Fuel', {
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
     // tableName: 'fuels'
    })

    Fuel.associate = function (models) {
        Fuel.hasMany(models.Car);
    }

    return Fuel
  }