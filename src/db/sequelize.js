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

const fuelMock = require('./mock-fuel');
const extColorMock = require('./mock-ext-color');
const intColorMock = require('./mock-int-color');
const transmissionMock = require('./mock-transmission');
const brandMock = require('./mock-brand');
const modelMock = require('./mock-model');
const stateMock = require('./mock-state');
const chassisMock = require('./mock-chassis');
const equipmentMock = require('./mock-equipment');
const carMock = require('./mock-cars');

const bcrypt = require('bcrypt');

const sequelize = new Sequelize('myecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: console.log,
})

const fuels = FuelModel(sequelize, DataTypes);
const exteriorColors = ExtColorModel(sequelize, DataTypes);
const interiorColors = IntColorModel(sequelize, DataTypes);
const transmissions = TransmissionModel(sequelize, DataTypes);
const brands = BrandModel(sequelize, DataTypes);
const models = ModelModel(sequelize, DataTypes);
const states = StateModel(sequelize, DataTypes);
const chassis = ChassisModel(sequelize, DataTypes);
const equipments = EquipmentModel(sequelize, DataTypes);
const cars = CarModel(sequelize, DataTypes);
const users = UserModel(sequelize, DataTypes);

const initDb = async () => {
    const _ = await sequelize.sync({ force: true })

    fuelMock.map(fuel => {
        fuels.create({
            name: fuel.name
        })
    })

    extColorMock.map(ext_color => {
        exteriorColors.create({
            name: ext_color.name,
            type: ext_color.type
        })
    })

    intColorMock.map(int_color => {
        interiorColors.create({
            name: int_color.name
        })
    })

    transmissionMock.map(transmission => {
        transmissions.create({
            name: transmission.name
        })
    })

    brandMock.map(brand => {
        brands.create({
            name: brand.name
        })
    })

    modelMock.map(model => {
        models.create({
            name: model.name
        })
    })

    stateMock.map(state => {
        states.create({
            name: state.name
        })
    })

    chassisMock.map(chassi => {
        chassis.create({
            name: chassi.name
        })
    })

    equipmentMock.map(equipment => {
        equipments.create({
            name: equipment.name
        })
    })

    carMock.map(car => {
        cars.create({
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
            users.create({
                username: 'root',
                password: hash
            })
        })
        .then(user => console.log(JSON.stringify(user)))
    console.log('La base de donnée a bien été initialisée !')
}

module.exports = { 
    initDb, fuels, exteriorColors, interiorColors, transmissions, brands, models, states, chassis, equipments, cars, users,
}