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
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` })

let sequelize;
if(process.env.NODE_ENV === 'dev'){
    sequelize = new Sequelize('myecommerce', 'root', '', {
        host: 'localhost',
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Etc/GMT-2',
        },
        logging: console.log,
    })
}
else {
    sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MySQL_USER, process.env.MYSQL_PASSWORD, {
        host: 'bkfqu1fzmaz07x4navd8-mysql.services.clever-cloud.com',
        dialect: 'mysql',
        logging: console.log,
    })

}
    
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
sequelize.models.Extcolor = extcolors;
sequelize.models.Intcolor = intcolors;
sequelize.models.Transmission = transmissions; 
sequelize.models.Brand = brands;
sequelize.models.Model = models;
sequelize.models.State = states;
sequelize.models.Chassis = chassis;
sequelize.models.Equipment = equipments;

// Mapping from URL parameters to Sequelize model names
const modelMapping = {
    cars: 'Car',
    fuels: 'Fuel',
    extcolors: 'Extcolor',
    intcolors: 'Intcolor',
    transmissions: 'Transmission',
    brands: 'Brand',
    models: 'Model',
    states: 'State',
    chassis: 'Chassis',
    equipments: 'Equipment',
};

//ASSOCIATIONS
fuels.hasMany(cars, {foreignKey: 'fuelId', as: 'cars'});
cars.belongsTo(fuels, {foreignKey: 'fuelId', as: "fuels"});

extcolors.hasMany(cars, {foreignKey: 'extcolorId', as: 'cars'});
cars.belongsTo(extcolors, {foreignKey: 'extcolorId', as: "extcolors"});

intcolors.hasMany(cars, {foreignKey: 'intcolorId', as: 'cars'});
cars.belongsTo(intcolors, {foreignKey: 'intcolorId', as: "intcolors"});

transmissions.hasMany(cars, {foreignKey: 'transmissionId', as: 'cars'});
cars.belongsTo(transmissions, {foreignKey: 'transmissionId', as: "transmissions"});

brands.hasMany(cars, {foreignKey: 'brandId', as: 'cars'});
cars.belongsTo(brands, {foreignKey: 'brandId', as: "brands"});

models.hasMany(cars, {foreignKey: 'modelId', as: 'cars'});
cars.belongsTo(models, {foreignKey: 'modelId', as: "models"});

states.hasMany(cars, {foreignKey: 'stateId', as: 'cars'});
cars.belongsTo(states, {foreignKey: 'stateId', as: "states"});

chassis.hasMany(cars, {foreignKey: 'chassisId', as: 'cars'});
cars.belongsTo(chassis, {foreignKey: 'chassisId', as: "chassis"});

equipments.hasMany(cars, {foreignKey: 'equipmentId', as: 'cars'});
cars.belongsTo(equipments, {foreignKey: 'equipmentId', as: "equipments"});

//CONTROLLERS
const getAll = (req, res) => {

    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/

    Model.findAndCountAll(queryOptions)
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

const getByPage = (req, res) => {
    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];


    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    

    let page = 0;
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        //-1 sinon ca commence à page=0
        page = pageAsNumber -1
    }

    let size = 5;
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 ) {
        size = sizeAsNumber
    }

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/
    queryOptions.order = [
        ['id', 'DESC']
    ]
    queryOptions.limit = size
    queryOptions.offset = page*size,

    Model.findAndCountAll(queryOptions)
        .then(items => {
            const status = 200
            const isSuccess = true
            const message = 'La liste a bien été récupérée.'
            const total = items.count
            const totalByPage = size
            const totalPages = Math.ceil(items.count / size)
            const currentPage = page +1
            const nextPage = currentPage + 1
            const previousPage = null
            res.json({ isSuccess, status, message, total, totalByPage, totalPages, currentPage, nextPage, previousPage, results: items })
        })
        .catch(error => {
            const message = `La liste n'a pas pu être récupérée. Rééssayez dans quelques instants`
            res.status(500).json({message, results: error})
        })
  
}

const searchByPage = (req, res) => {
    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let query = req.query.query

    let page = 0;
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        //-1 sinon ca commence à page=0
        page = pageAsNumber -1
    }

    let size = 5;
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 ) {
        size = sizeAsNumber
    }

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/
    queryOptions.where = {
        name: { //name = propriété du model
            [Op.like]: `%${query}%` //query = critere de recherche 
        }
    }
    queryOptions.order = [
        ['id', 'DESC']
    ]
    queryOptions.limit = size
    queryOptions.offset = page*size,
   
    Model.findAndCountAll(queryOptions)
        .then(items => {
            const status = 200
            const isSuccess = true
            const message = 'La liste a bien été récupérée.'
            const total = items.count
            const totalByPage = size
            const totalPages = Math.ceil(items.count / size)
            const currentPage = page  +1
            const nextPage = currentPage + 1
            const previousPage = null

            res.json({ isSuccess, status, message, query, total, totalByPage, totalPages, currentPage, nextPage, previousPage, results: items })
        })
        .catch(error => {
            const message = `La liste n'a pas pu être récupérée. Rééssayez dans quelques instants`
            res.status(500).json({message, results: error})
        })
    
   
}

const getById = (req, res) => {

    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/
    
    Model.findByPk(req.params.id, queryOptions)
        .then(item => {
            if(item === null) {
                const message = `L'élément demandé n'existe pas. Rééssayez avec un autre identifiant.`
                return res.status(404).json({message})
            }
            const message = 'Un élément a bien été trouvé.'
            res.json({ message, data: item })
        })
        .catch(error => {
            const message = `L'élément n'a pas pu être récupéré. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })
   
}

const createId = (req, res) => {

    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/

    Model.create(req.body, queryOptions)
        .then(item => {
            const message = `L'élément ${req.body.name} a bien été créé.`
            res.json({ message, data: item })
        })
        .catch(error => {
            if(error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            if(error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: 'error.message', data: error });
            }
            const message = `L'élément n'a pas pu être ajouté. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })
}

const updateId = (req, res) => {
    
    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const id = req.params.id

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/
    queryOptions.where = {
        id: id
    }

    Model.update(req.body, queryOptions)
        .then(_ => {
            return Model.findByPk(id).then(item => {
                if(item === null){
                    const message = `L'élément demandé n'existe pas. Rééssayez avec un autre identifiant`
                    return res.status(404).json({message})
                }
                const message = `L'élément' ${item.name} a bien été modifié.`
                res.json({message, data: item })
            })
        })
        .catch(error => {
            if(error instanceof ValidationError){
                return res.status(400).json({message: error.message, data:error})
            }
            if(error instanceof UniqueConstraintError){
                return res.status(400).json({message: error.message, data:error})
            }
            const message = `La liste n'a pas pu être modifiée. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })

}

const deleteById = (req, res) => {

    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Le modèle "${modelNameParam}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const queryOptions = {};
    /*if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuels',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolors',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolors'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmissions'
            },
            {
                model: sequelize.models.Brand,
                as: 'brands'
            },
            {
                model: sequelize.models.Model,
                as: 'models'
            },
            {
                model: sequelize.models.State,
                as: 'states'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipments'
            },
        ];
    }*/
 
    Model.findByPk(req.params.id, queryOptions)
        .then(item => {  

            if(item === null) {
                const message = `L'élément demandé n'existe pas. Rééssayez avec un autre identifiant`
                return res.status(404).json({message})
            }    

            const itemDeleted = item;  

            Model.destroy({ 
                where: { id: item.id } 
            })
                .then(_ => {
                    message = `L'élément avec l'identifiant n°${item.id} a bien été supprimé.`
                    res.json({message, data: itemDeleted })
                })
        })
        .catch(error => {
            const message = `La liste n'a pas pu être supprimée. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })
    
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
            pictures: car.pictures,
            power: car.power,
            nb_horses: car.nb_horses,
            nb_kms: car.nb_kms,
            first_registration_date: car.first_registration_date,
            nb_seating_places: car.nb_seating_places,
            nb_doors: car.nb_doors,
            co2: car.co2,
            regular_price: car.regular_price,
            currency: car.currency,
            fuelId: car.fuelId,
            extcolorId: car.extcolorId,
            intcolorId: car.intcolorId,
            transmissionId: car.transmissionId,
            brandId: car.brandId,
            modelId: car.modelId,
            stateId: car.stateId,
            chassisId: car.chassisId,
            equipmentId: car.equipmentId,
        })
        .then(car => console.log(JSON.stringify(car)))
    })

    bcrypt.hash('root', 10)
        .then(hash => {
            users.create({
                username: 'root',
                password: hash,
                role: 'admin'
            })
        })
        .then(user => console.log(JSON.stringify(user)))

    console.log('La base de donnée a bien été initialisée !')
}

module.exports = { 
    initDb,
    getAll,
    getByPage,
    searchByPage,
    getById,
    createId,
    updateId,
    deleteById
}