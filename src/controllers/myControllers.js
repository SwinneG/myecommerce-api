const sequelize = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')



const getAll = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }
   
    Model.findAll()
        .then(items => {
            const message = 'La liste a bien été récupérée.'
            res.json({ message, data: items })
        })
        .catch(error => {
            const message = `La liste n'a pas pu être récupérée. Rééssayez dans quelques instants`
            res.status(500).json({message, data: error})
        })
} 

const getById = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

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

const createId = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

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

const updateId = (req, res) => {

    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }

    const id = req.params.id

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

const deleteById = (req, res) => {
    const modelName = req.params.modelName;
    const Model = sequelize[modelName];

    if (!Model) {
        const message = `Le modèle "${modelName}" n'existe pas.`;
        return res.status(404).json({ message });
    }
    
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
  
module.exports = { 
    getAll, 
    getById,
    createId,
    updateId,
    deleteById
}