module.exports = (sequelize, DataTypes) => {
    const State =  sequelize.define('State', {
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

    State.associate = function (models) {
        State.hasMany(models.Car);
    }

    return State
  }