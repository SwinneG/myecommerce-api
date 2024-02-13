const { Car } = require('../db/sequelize')
const { Op } = require('sequelize')
const auth = require('../auth/auth')


module.exports = (app) => {
    app.get('/api/cars', auth, (req, res) => {
        if(req.query.name){
            const name = req.query.name
            const limit = parseInt(req.query.limit) || 5

            if(name.length < 2) {
                const message = `Le terme de recherche doit contenir au moins 2 caractères`
                return res.status(400).json({message})
            }

            return Car.findAndCountAll({
                where: {
                name: { //name est la propriété du model
                    [Op.like]: `%${name}%`  //name est le critère de recherche
                }
                },
                order: ['name'],
                limit: limit
            })
            .then(({count, rows}) => {
                const message = `Il y a ${count} voitures qui correspondent au terme de recherche ${name}`
                res.json({message, data: rows})
            })
        } else {
            Car.findAll({
                order: ['name']
            })
            .then(cars => {
                const message = 'La liste des voitures a bien été récupérée.'
                res.json({ message, data: cars })
            })
            .catch(error => {
                const message = `La liste des voitures n'a pas pu être récupérée. Reessayez dans quelques instants`
                res.status(500).json({message, data: error})
            })
        }
            
    })
}