module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Username cannot be empty' },
        notNull: { msg: 'Username is a required property' }
    }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('admin','editor'),
      allowNull: false
    }
  }, {
   timestamps: true,
   createdAt: 'created',
   updatedAt: false,
   tableName: 'users'
  })
}