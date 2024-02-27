module.exports = (sequelize, DataTypes) => {
    const Model =  sequelize.define('Model', {
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
      tableName: 'models'
    })

    // Model.associate = function (models) {
    //     Model.hasMany(models.Car);
    // }

    return Model
  }