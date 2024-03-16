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
        unique: true,
        validate: {
            notEmpty: { msg: 'Name cannot be empty' },
            notNull: { msg: 'Name is a required property' }
        }
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false,
      tableName: 'fuels'
    })

    return Fuel
  }