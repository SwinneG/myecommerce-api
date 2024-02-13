const { Car } = require('../db/sequelize')
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')


module.exports = (app) => {
  app.put('/api/cars/:id', auth, (req, res) => {
    const id = req.params.id
    Car.update(req.body, {
      where: { id: id }
    })
    .then(_ => {
      return Car.findByPk(id).then(car => {
        if(car === null){
          const message = `La voiture demandée n'existe pas. Rééssayez avec un autre identifiant`
          return res.status(404).json({message})
        }
        const message = `La voiture ${pokemon.name} a bien été modifiée.`
        res.json({message, data: pokemon })
      })
    })
    .catch(error => {
      if(error instanceof ValidationError){
        return res.status(400).json({message: error.message, data:error})
      }
      if(error instanceof UniqueConstraintError){
        return res.status(400).json({message: error.message, data:error})
      }
      const message = `La liste des voitures n'a pas pu être modifiée. Reessayez dans quelques instants`
      res.status(500).json({message, data: error})
    })
  })
}