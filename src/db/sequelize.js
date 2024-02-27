const { Sequelize, DataTypes, ValidationError, UniqueConstraintError, Op } = require('sequelize');

const FuelModel = require('../models/fuel');
const ExtcolorModel = require('../models/extcolor');
const IntcolorModel = require('../models/intcolor');
const TransmissionModel = require('../models/transmission');
const BrandModel = require('../models/brand');
const ModelModel = require('../models/model');
const StateModel = require('../models/state');
const ChassisModel = require('../models/chassis');
const EquipmentModel = require('../models/equipment');
const CarModel = require('../models/car');
const UserModel = require('../models/user');

const fuelMock = require('./mocks/mock-fuel');
const extcolorMock = require('./mocks/mock-ext-color');
const intcolorMock = require('./mocks/mock-int-color');
const transmissionMock = require('./mocks/mock-transmission');
const brandMock = require('./mocks/mock-brand');
const modelMock = require('./mocks/mock-model');
const stateMock = require('./mocks/mock-state');
const chassisMock = require('./mocks/mock-chassis');
const equipmentMock = require('./mocks/mock-equipment');
const carMock = require('./mocks/mock-cars');

const bcrypt = require('bcrypt');


// const sequelize = new Sequelize('mysql://17384417-8588-47a7-b00c-58b4c2858698-root:root@psedge.global:3306/myecommerce-api-nodejs', {
//     dialectModule: require('mysql2'),
// })

const sequelize = new Sequelize('myecommerce', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
    dialectOptions: {
        timezone: 'Etc/GMT-2',
    },
    logging: console.log,
})


const fuels = FuelModel(sequelize, DataTypes);
const extcolors = ExtcolorModel(sequelize, DataTypes);
const intcolors = IntcolorModel(sequelize, DataTypes);
const transmissions = TransmissionModel(sequelize, DataTypes);
const brands = BrandModel(sequelize, DataTypes);
const models = ModelModel(sequelize, DataTypes);
const states = StateModel(sequelize, DataTypes);
const chassis = ChassisModel(sequelize, DataTypes);
const equipments = EquipmentModel(sequelize, DataTypes);
const cars = CarModel(sequelize, DataTypes);
const users = UserModel(sequelize, DataTypes);

sequelize.models.Car = cars;
sequelize.models.Fuel = fuels;

// Mapping from URL parameters to Sequelize model names
const modelMapping = {
    cars: 'Car',
    fuels: 'Fuel'
};

//ASSOCIATIONS
fuels.hasMany(cars, {foreignKey: 'fuelId', as: 'cars'});
cars.belongsTo(fuels, {foreignKey: 'fuelId', as: "fuels"});

//CONTROLLERS
const getAll = (req, res) => {

    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    // Access the model using the mapped name
    const Model = sequelize.models[modelName];

    if(modelName === 'Car'){
        Model.findAndCountAll({
            include: 
            [
                {
                    model: sequelize.models.Fuel,
                    as: 'fuels'
                }
            ]
        })
            .then(items => {
                const status = 200
                const isSuccess = true
                const message = 'La liste a bien été récupérée.'
                const total = items.count
                res.json({ isSuccess, status, message, total, results: items })
            })
            .catch(error => {
                const message = `La liste n'a pas pu être récupérée. Rééssayez dans quelques instants`
                res.status(500).json({message, results: error})
            })
    }
    else {
        Model.findAndCountAll()
            .then(items => {
                const status = 200
                const isSuccess = true
                const message = 'La liste a bien été récupérée.'
                const total = items.count
                res.json({ isSuccess, status, message, total, results: items })
            })
            .catch(error => {
                const message = `La liste n'a pas pu être récupérée. Rééssayez dans quelques instants`
                res.status(500).json({message, results: error})
            })
    }
}

const initDb = async () => {
    const _ = await sequelize.sync({ force: true })

    fuelMock.map(fuel => {
        fuels.create({
            name: fuel.name
        })
    })

    extcolorMock.map(extcolor => {
        extcolors.create({
            name: extcolor.name,
            type: extcolor.type
        })
    })

    intcolorMock.map(intcolor => {
        intcolors.create({
            name: intcolor.name
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
            fuelId: car.fuelId,
            ext_color_id: car.ext_color_id,
            int_color_id: car.int_color_id,
            transmission_id: car.transmission_id,
            brandId: car.brandId,
            model_id: car.model_id,
            state_id: car.state_id,
            chassis_id: car.chassis_id,
            equipment_id: car.equipment_id,
        })
        .then(car => console.log(JSON.stringify(car)))
    })

    // users.create({
    //     username: 'root',
    //     password: 'root'
    // })
    // .then(user => console.log(JSON.stringify(user)))
    
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
    initDb, 
    fuels, 
    extcolors, 
    intcolors, 
    transmissions, 
    brands, 
    models, 
    states, 
    chassis, 
    equipments, 
    cars, 
    users, 
    getAll
}