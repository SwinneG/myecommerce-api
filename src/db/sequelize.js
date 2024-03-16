const { Sequelize, DataTypes, ValidationError, UniqueConstraintError, Op } = require('sequelize');

const FuelModel = require('../models/fuel');
const ExtcolorModel = require('../models/extcolor');
const IntcolorModel = require('../models/intcolor');
const TransmissionModel = require('../models/transmission');
const BrandModel = require('../models/brand');
const ModelModel = require('../models/model');
const StateModel = require('../models/state');
const ChassisModel = require('../models/chassis');
const equipmentCategoryModel = require('../models/equipmentCategory')
const EquipmentModel = require('../models/equipment');
const UserModel = require('../models/user');
const CarModel = require('../models/car');
const CarImageModel = require('../models/carImage');

const fuelMock = require('./mocks/mock-fuel');
const extcolorMock = require('./mocks/mock-ext-color');
const intcolorMock = require('./mocks/mock-int-color');
const transmissionMock = require('./mocks/mock-transmission');
const brandMock = require('./mocks/mock-brand');
const modelMock = require('./mocks/mock-model');
const stateMock = require('./mocks/mock-state');
const chassisMock = require('./mocks/mock-chassis');
const equipmentCategoryMock = require('./mocks/mock-equipment-category');
const equipmentMock = require('./mocks/mock-equipment');
const carMock = require('./mocks/mock-car');
const carImageMock = require('./mocks/mock-car-image');

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
const equipmentCategories = equipmentCategoryModel(sequelize, DataTypes);
const equipments = EquipmentModel(sequelize, DataTypes);
const users = UserModel(sequelize, DataTypes);
const cars = CarModel(sequelize, DataTypes);
const carImages = CarImageModel(sequelize, DataTypes);

sequelize.models.Fuel = fuels;
sequelize.models.Extcolor = extcolors;
sequelize.models.Intcolor = intcolors;
sequelize.models.Transmission = transmissions; 
sequelize.models.Brand = brands;
sequelize.models.Model = models;
sequelize.models.State = states;
sequelize.models.Chassis = chassis;
sequelize.models.EquipmentCategory = equipmentCategories;
sequelize.models.Equipment = equipments;
sequelize.models.User = users;
sequelize.models.Car = cars;
sequelize.models.CarImage = carImages;

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
    equipmentCategories: 'EquipmentCategory',
    users: 'User',
    carImages: 'CarImage',
};

//ASSOCIATIONS
fuels.hasMany(cars, {foreignKey: 'fuelId', as: 'cars'});
cars.belongsTo(fuels, {foreignKey: 'fuelId', as: "fuel"});

extcolors.hasMany(cars, {foreignKey: 'extcolorId', as: 'cars'});
cars.belongsTo(extcolors, {foreignKey: 'extcolorId', as: "extcolor"});

intcolors.hasMany(cars, {foreignKey: 'intcolorId', as: 'cars'});
cars.belongsTo(intcolors, {foreignKey: 'intcolorId', as: "intcolor"});

transmissions.hasMany(cars, {foreignKey: 'transmissionId', as: 'cars'});
cars.belongsTo(transmissions, {foreignKey: 'transmissionId', as: "transmission"});

brands.hasMany(cars, {foreignKey: 'brandId', as: 'cars'});
cars.belongsTo(brands, {foreignKey: 'brandId', as: "brand"});

models.hasMany(cars, {foreignKey: 'modelId', as: 'cars'});
cars.belongsTo(models, {foreignKey: 'modelId', as: "model"});

states.hasMany(cars, {foreignKey: 'stateId', as: 'cars'});
cars.belongsTo(states, {foreignKey: 'stateId', as: "state"});

chassis.hasMany(cars, {foreignKey: 'chassisId', as: 'cars'});
cars.belongsTo(chassis, {foreignKey: 'chassisId', as: "chassis"});

equipments.hasMany(cars, {foreignKey: 'equipmentId', as: 'cars'});
cars.belongsTo(equipments, {foreignKey: 'equipmentId', as: "equipment"});

equipmentCategories.hasMany(cars, {foreignKey: 'equipmentCategoryId', as: 'cars'});
cars.belongsTo(equipmentCategories, {foreignKey: 'equipmentCategoryId', as: "equipmentCategory"});

users.hasMany(cars, {foreignKey: 'userId', as: 'cars'});
cars.belongsTo(users, {foreignKey: 'userId', as: "user"});

brands.hasMany(models, {foreignKey: 'brandId', as: 'model'});
models.belongsTo(brands, {foreignKey: 'brandId', as: "brand"});

equipmentCategories.hasMany(equipments, {foreignKey: 'equipmentCategoryId', as: 'equipment'});
equipments.belongsTo(equipmentCategories, {foreignKey: 'equipmentCategoryId', as: "equipmentCategory"});

cars.hasMany(carImages, {foreignKey:'carId', as:'carImages'});
carImages.belongsTo(cars, {foreignKey:'carId', as:'cars'})

//CONTROLLERS
const getAll = (req, res) => {
    const modelNameParam = req.params.modelName; // By example: "cars"
    const modelName = modelMapping[modelNameParam] || modelNameParam; // By example: "Car"

    // Check if the model exists in sequelize.models
    if (!sequelize.models[modelName]) {
        const message = `Model "${modelNameParam}" does not exist.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const pageAsNumber = Number.parseInt(req.query.page);
    let page = 0;
    if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        //-1 otherwise it starts at page=0
        page = pageAsNumber -1
    }

    const sizeAsNumber = Number.parseInt(req.query.size);
    let size = 5;
    let isUnlimited = false;
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber >= 0 ) {
        size = sizeAsNumber
    }
    else if(sizeAsNumber === -1){
        isUnlimited = true
        size = -1
    }

    let query=""
    if(req.query.query) {
        query = req.query.query
    }
    
    const queryOptions = {};
    if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuel',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolor',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolor'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmission'
            },
            {
                model: sequelize.models.Brand,
                as: 'brand'
            },
            {
                model: sequelize.models.Model,
                as: 'model'
            },
            {
                model: sequelize.models.State,
                as: 'state'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipment'
            },
            {
                model: sequelize.models.EquipmentCategory,
                as: 'equipmentCategory'
            },
            {
                model: sequelize.models.User,
                as: 'user'
            },
            {
                model: sequelize.models.CarImage,
                as: 'carImages'
            }
        ];
    }

    if(modelName === 'Model') {
        queryOptions.include = [
            {
                model: sequelize.models.Brand,
                as: 'brand',
            },
        ];
    }

    if(modelName === "Equipment") {
        queryOptions.include = [
            {
                model: sequelize.models.EquipmentCategory,
                as: 'equipmentCategory'
            }
        ]
    }

    if(query!=""){
        queryOptions.where = {
            name: { //name = model property
                [Op.like]: `%${query}%` //query = Search criteria
            }
        }
    }
    queryOptions.order = [
        ['id', 'DESC']
    ]
    if(!isUnlimited){
        queryOptions.limit = size
        queryOptions.offset = page*size
    }
    queryOptions.distinct= true // for the good count
   
    Model.findAndCountAll(queryOptions)
        .then(items => {
            const status = 200
            const isSuccess = true
            const message = 'The list has been retrieved.'
            const total = items.count
            const totalByPage = isUnlimited ? total : size;
            const totalPages = isUnlimited ? 1 : Math.ceil(items.count / size)
            const currentPage = isUnlimited ? 1 : page + 1
            const nextPage = isUnlimited ? null : currentPage + 1
            const previousPage = isUnlimited ? null : null

            res.json({isSuccess, status, message, query, total, totalByPage, totalPages, currentPage, nextPage, previousPage, results: items })
        })
        .catch(error => {
            const message = `The list could not be retrieved. Try again in a few moments`
            console.error(error.message)
            res.status(500).json({message, results: error})
        })
        
}

const getById = (req, res) => {

    const modelNameParam = req.params.modelName;
    const modelName = modelMapping[modelNameParam] || modelNameParam;

    if (!sequelize.models[modelName]) {
        const message = `Model "${modelNameParam}" does not exist.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const queryOptions = {};
    if (modelName === 'Car') {
        queryOptions.include = [
            {
                model: sequelize.models.Fuel,
                as: 'fuel',
            },
            {
                model: sequelize.models.Extcolor,
                as: 'extcolor',
            },
            {
                model: sequelize.models.Intcolor,
                as: 'intcolor'
            },
            {
                model: sequelize.models.Transmission,
                as: 'transmission'
            },
            {
                model: sequelize.models.Brand,
                as: 'brand'
            },
            {
                model: sequelize.models.Model,
                as: 'model'
            },
            {
                model: sequelize.models.State,
                as: 'state'
            },
            {
                model: sequelize.models.Chassis,
                as: 'chassis'
            },
            {
                model: sequelize.models.Equipment,
                as: 'equipment'
            },
            {
                model: sequelize.models.EquipmentCategory,
                as: 'equipmentCategory'
            },
            {
                model: sequelize.models.User,
                as: 'user'
            },
            {
                model: sequelize.models.CarImage,
                as: 'carImages'
            }
        ];
    }

    if(modelName === 'Model') {
        queryOptions.include = [
            {
                model: sequelize.models.Brand,
                as: 'brand',
            },
        ];
    }

    if(modelName === "Equipment") {
        queryOptions.include = [
            {
                model: sequelize.models.EquipmentCategory,
                as: 'equipmentCategory'
            }
        ]
    }

    Model.findByPk(req.params.id, queryOptions)
        .then(item => {
            if(item === null) {
                const message = `The requested item does not exist. Try again with another username.`
                return res.status(404).json({message})
            }
            const message = 'An item has been found.'
            res.json({ message, data: item })
        })
        .catch(error => {
            const message = `The item could not be retrieved. Try again in a few moments`
            res.status(500).json({message, data: error})
        })
   
}

const createId = async (req, res) => {

    console.log({create_body: req.body})
    console.log({create_file: req.files})
    console.log({create_deleteFiles: req.body.deleteFiles})

    const modelNameParam = req.params.modelName;
    const modelName = modelMapping[modelNameParam] || modelNameParam;

    if (!sequelize.models[modelName]) {
        const message = `Model "${modelNameParam}" does not exist.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    const queryOptions = {};

    try {
        let item;
        if(req.body.modelName){
             item = await Model.create(JSON.parse(req.body.modelName), queryOptions);
        }
        else {
             item = await Model.create(req.body, queryOptions);
        }
        const createdItemId = item.id;

        if(req.files){
            req.files.map(async url => {
                const imagePath = url.path;
                await carImages.create({ image: imagePath, carId: createdItemId });
            })
        }
        if(req.body.deleteFiles) {
            JSON.parse(req.body.deleteFiles).map(async url => {
                const formattedUrl = url.replace(process.env.URL+ ':'+process.env.PORT+'/','')
                await carImages.destroy({ where: { image: formattedUrl } });
            })
        }
        
        const message = `The ${req.body.name} element has been successfully created.`;
        res.json({ message, data: item });

    } 
    catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const messages = error.errors.map(e => e.message);
            return res.status(400).json({ message: messages.join(", ") });
        }
        console.error('Error creating the element:', error);
        return res.status(500).json({ message: 'An error occurred while creating the element', error });
    }
}

const updateId = async (req, res) => {

    console.log({update_body: req.body})
    console.log({update_file: req.files})
    console.log({update_deleteFiles: req.body.deleteFiles})

    const modelNameParam = req.params.modelName;
    const modelName = modelMapping[modelNameParam] || modelNameParam;

    if (!sequelize.models[modelName]) {
        const message = `Model "${modelNameParam}" doest not exist.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];
    const id = req.params.id;
    const queryOptions = { where: { id: id } };

    try {
        if(req.body.modelName){
            await Model.update(req.body.modelName, queryOptions);
       }
       else {
            await Model.update(req.body, queryOptions);
       }
        
        const updatedItem = await Model.findByPk(id);

        if (!updatedItem) {
            const message = `The requested item with ID ${id} does not exist.`;
            return res.status(404).json({ message });
        }
        if(req.files){
            req.files.map(async url => {
                const imagePath = url.path;
                await carImages.create({ image: imagePath, carId: id });
            })
        }
        if(req.body.deleteFiles) {
            JSON.parse(req.body.deleteFiles).map(async url => {
                const formattedUrl = url.replace(process.env.URL+ ':'+process.env.PORT+'/','')
                await carImages.destroy({ where: { image: formattedUrl } });
            })
        }

        const message = `The element ${modelName} with ID ${id} has been successfully modified.`;
        return res.json({ message, data: updatedItem });
    } 
    catch (error) {
        if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
            const messages = error.errors.map(e => e.message);
            return res.status(400).json({ message: messages.join(", ") });
        }
        console.error('Error creating the element:', error);
        return res.status(500).json({ message: 'An error occurred while creating the element', error });
    }
};

const deleteById = async (req, res) => {

    console.log({update_body: req.body})
    console.log({update_file: req.files})
    console.log({update_deleteFiles: req.body.deleteFiles})

    const modelNameParam = req.params.modelName;
    const id = req.params.id;
    const modelName = modelMapping[modelNameParam] || modelNameParam;

    if (!sequelize.models[modelName]) {
        const message = `Model "${modelNameParam}" does not exist.`;
        return res.status(404).json({ message });
    }

    const Model = sequelize.models[modelName];

    try {
        const item = await Model.findByPk(id);
        if (!item) {
            const message = `The requested item does not exist. Try again with another username.`;
            return res.status(404).json({ message });
        }

        await Model.destroy({ where: { id: id } });

        const message = `The element with id "${id}" has been deleted.`;
        return res.json({ message });
    } catch (error) {
        const message = `The deletion failed. Please try again later.`;
        return res.status(500).json({ message, data: error });
    }
};

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
            name: model.name,
            brandId: model.brandId
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

    equipmentCategoryMock.map(category => {
        equipmentCategories.create({
            name: category.name
        })
    })

    equipmentMock.map(equipment => {
        equipments.create({
            name: equipment.name,
            equipmentCategoryId: equipment.equipmentCategoryId
        })
    })

    const adminPwd = await bcrypt.hash('root', 10)
    const editorPwd = await bcrypt.hash('jaja', 10)

    await users.create({
        username: 'root',
        password: adminPwd,
        role: 'admin'
    })

    await users.create({
        username: 'jaja',
        password: editorPwd,
        role: 'admin'
    })


    carMock.map(async car => {
        await cars.create({
            name: car.name,
            //pictures: car.pictures,
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
            equipmentCategoryId: car.equipmentCategoryId,
            userId: car.userId,
        })
        .then(car => console.log(JSON.stringify(car)))
    })
    
    carImageMock.map(carImage => {
        carImages.create({
            image: carImage.image,
            carId: carImage.carId
        })
    })
    

    console.log('La base de donnée a bien été initialisée !')
}

module.exports = { 
    initDb,
    getAll,
    getById,
    createId,
    updateId,
    deleteById
}