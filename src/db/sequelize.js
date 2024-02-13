const { Sequelize, DataTypes } = require('sequelize');

const FuelModel = require('../models/fuel');
const ExtColorModel = require('../models/ext_color');
const CarModel = require('../models/car');
const UserModel = require('../models/user');

const fuels = require('./mock-fuel');
const extColors = require('./mock-ext-color');
const cars = require('./mock-cars');

const bcrypt = require('bcrypt');

const sequelize = new Sequelize('myecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: console.log,
})

const Fuel = FuelModel(sequelize, DataTypes);
const ExtColor = ExtColorModel(sequelize, DataTypes);
const Car = CarModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);

const initDb = async () => {
    const _ = await sequelize.sync({ force: true })

    fuels.map(fuel => {
        Fuel.create({
            name: fuel.name
        })
    })

    extColors.map(ext_color => {
        ExtColor.create({
            name: ext_color.name,
            type: ext_color.type
        })
    })

    cars.map(car => {
        Car.create({
            name: car.name,
            picture: car.picture,
            power: car.power,
            horses: car.horses,
            kms: car.kms,
            first_registration: car.first_registration,
            seating_places: car.seating_places,
            doors: car.doors,
            co2: car.co2,
            price: car.price,
            fuel_id: car.fuel_id,
            ext_color_id: car.ext_color_id,
            /*int_color: car.int_color,
            transmission: car.transmission,
            brand: car.brand,
            model: car.model,
            state: car.state,
            chassis: car.chassis,
            equipment: car.equipment,*/
        })
        .then(car => console.log(JSON.stringify(car)))
    })
    
    bcrypt.hash('root', 10)
        .then(hash => {
            User.create({
                username: 'root',
                password: hash
            })
        })
        .then(user => console.log(JSON.stringify(user)))
    console.log('La base de donnée a bien été initialisé   e !')
}

module.exports = { 
    initDb, Fuel, ExtColor, Car, User,
}