const { Sequelize, DataTypes } = require('sequelize');

const FuelModel = require('../models/fuel');
const ExtColorModel = require('../models/ext_color');
const IntColorModel = require('../models/int_color');
const TransmissionModel = require('../models/transmission');
const BrandModel = require('../models/brand');
const ModelModel = require('../models/model');
const StateModel = require('../models/state');
const ChassisModel = require('../models/chassis');
const EquipmentModel = require('../models/equipment');
const CarModel = require('../models/car');
const UserModel = require('../models/user');

const fuels = require('./mock-fuel');
const extColors = require('./mock-ext-color');
const intColors = require('./mock-int-color');
const transmissions = require('./mock-transmission');
const brands = require('./mock-brand');
const models = require('./mock-model');
const states = require('./mock-state');
const chassis = require('./mock-chassis');
const equipments = require('./mock-equipment');
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
const IntColor = IntColorModel(sequelize, DataTypes);
const Transmission = TransmissionModel(sequelize, DataTypes);
const Brand = BrandModel(sequelize, DataTypes);
const Model = ModelModel(sequelize, DataTypes);
const State = StateModel(sequelize, DataTypes);
const Chassis = ChassisModel(sequelize, DataTypes);
const Equipment = EquipmentModel(sequelize, DataTypes);
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

    intColors.map(int_color => {
        IntColor.create({
            name: int_color.name
        })
    })

    transmissions.map(transmission => {
        Transmission.create({
            name: transmission.name
        })
    })

    brands.map(brand => {
        Brand.create({
            name: brand.name
        })
    })

    models.map(model => {
        Model.create({
            name: model.name
        })
    })

    states.map(state => {
        State.create({
            name: state.name
        })
    })

    chassis.map(chassis => {
        Chassis.create({
            name: chassis.name
        })
    })

    equipments.map(equipment => {
        Equipment.create({
            name: equipment.name
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
            int_color_id: car.int_color_id,
            transmission_id: car.transmission_id,
            brand_id: car.brand_id,
            model_id: car.model_id,
            state_id: car.state_id,
            chassis_id: car.chassis_id,
            equipment_id: car.equipment_id,
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
    console.log('La base de donnée a bien été initialisée !')
}

module.exports = { 
    initDb, Fuel, ExtColor, IntColor, Transmission, Brand, Model, State, Chassis, Equipment, Car, User,
}