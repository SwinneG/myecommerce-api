const { Car } = require('../db/sequelize')
const auth = require('../auth/auth')


module.exports = (app) => {
  app.get('/api/cars/:id', auth, (req, res) => {
    Car.findByPk(req.params.id)
      .then(car => {
        if(car === null) {
          const message = `La voiturée demandée n'existe pas. Reessayez avec un autre identifiant.`
          return res.status(404).json({message})
        }
        const message = 'Une voiture a bien été trouvé.'
        res.json({ message, data: pokemon })
      })
      .catch(error => {
        const message = `La voiture n'a pas pu être récupérée. Reessayez dans quelques instants`
        res.status(500).json({message, data: error})
      })
  })
}