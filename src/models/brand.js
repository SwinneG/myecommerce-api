module.exports = (sequelize, DataTypes) => {
    const Brand =  sequelize.define('Brand', {
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
      tableName: 'brands'
    })

    return Brand
  }