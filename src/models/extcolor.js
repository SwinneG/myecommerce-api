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
            unique: true,
            validate: {
                notEmpty: { msg: 'Name cannot be empty' },
                notNull: { msg: 'Name is a required property' }
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true,
        createdAt: true,
        updatedAt: true,
        tableName: 'extcolors'
    })

    return Extcolor
  }