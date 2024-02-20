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
      },
    }, {
      timestamps: true,
      createdAt: 'created',
      updatedAt: false,
      tableName: 'brands'
    })

    Brand.associate = function (models) {
        Brand.hasMany(models.Car);
    }

    return Brand
  }