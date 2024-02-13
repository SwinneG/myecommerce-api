module.exports = (sequelize, DataTypes) => {
    const ExtColor =  sequelize.define('ExtColor', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false,
     // tableName: 'extcolors'
    })

    ExtColor.associate = function (models) {
        ExtColor.hasMany(models.Car);
    }

    return ExtColor
  }