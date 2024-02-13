module.exports = (sequelize, DataTypes) => {
    const Transmission =  sequelize.define('Transmission', {
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
      updatedAt: false
    })

    Transmission.associate = function (models) {
        Transmission.hasMany(models.Car);
    }

    return Transmission
  }