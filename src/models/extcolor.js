module.exports = (sequelize, DataTypes) => {
    const Extcolor =  sequelize.define('Extcolor', {
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
        tableName: 'extcolors'
    })

    return Extcolor
  }