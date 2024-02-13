const { Car } = require('../db/sequelize')
const auth = require('../auth/auth')


module.exports = (app) => {
  app.delete('/api/cars/:id', auth, (req, res) => {
    Pokemon.findByPk(req.params.id).then(car => {  
      if(car === null) {
        const message = `La voiture demandée n'existe pas. Reessayez avec un autre identifiant`
        return res.status(404).json({message})
      }    
      const carDeleted = car;  
      Car.destroy({ 
          where: { id: car.id } 
      })
      .then(_ => {
        const message = `La voiture avec l'identifiant n°${car.id} a bien été supprimée.`
        res.json({message, data: carDeleted })
      })
    })
    .catch(error => {
      const message = `La liste des voitures n'a pas pu être supprimée. Reessayez dans quelques instants`
      res.status(500).json({message, data: error})
    })
  })
}