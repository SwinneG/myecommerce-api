const sequelize = require('../db/sequelize')
const { ValidationError, UniqueConstraintError, Op } = require('sequelize')

const getAll = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    // console.log(modelName)//cars
    // console.log(Model)//Car

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    if(modelName === 'cars'){
        const Fuel = sequelize['FuelModel ']

        Model.findAndCountAll({
            include: 
            [
                {
                    model: Fuel,
                    as: 'fuels'
                    // foreignKey: 'fuelId',
                    // attributes: ['id','name']
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

const getByPage = (req, res) => {
    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

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

    if(Model === 'Car'){
        Model.findAndCountAll({
            include: ['fuels', 'brands'],
            order: [
                ['id', 'DESC']
            ],
            limit: size,
            offset: page*size
        })
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
    else {
        Model.findAndCountAll({
            order: [
                ['id', 'DESC']
            ],
            limit: size,
            offset: page*size
        })
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
}

const searchByPage = (req, res) => {
    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

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

    if(Model === 'Car') {
        Model.findAndCountAll({
            include: ['fuels', 'brands'],
            where: {
                name: { //name = propriété du model
                    [Op.like]: `%${query}%` //query = critere de recherche 
                }
            },
            order: [
                ['id', 'DESC']
            ],
            limit: size,
            offset: page*size
        })
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
    else {
        Model.findAndCountAll({
            where: {
                name: { //name = propriété du model
                    [Op.like]: `%${query}%` //query = critere de recherche 
                }
            },
            order: [
                ['id', 'DESC']
            ],
            limit: size,
            offset: page*size
        })
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
}

const getById = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    if(Model === 'Car') {
        Model.findByPk(req.params.id, {
            include: ['fuels', 'brands'],
        })
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
    else {
        Model.findByPk(req.params.id)
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

}

const createId = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    if(Model === 'Car') {
        Model.create(req.body, {
            include: ['fuels', 'brands'],
        })
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
    else {
        Model.create(req.body)
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
}

const updateId = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const id = req.params.id

    if(Model === 'Car') {
        Model.update(req.body, {
            include: ['fuels', 'brands'],
            where: { id: id }
        })
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
    else {
        Model.update(req.body, {
            where: { id: id }
        })
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

    
}

const deleteById = (req, res) => {
    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    if(Model === 'Car') {
        Model.findByPk(req.params.id, {
            include: ['fuels', 'brands'],
        })
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
    else {
        Model.findByPk(req.params.id)
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
    
    

    
}
  
module.exports = { 
    getAll, 
    getByPage,
    searchByPage,
    getById,
    createId,
    updateId,
    deleteById
}