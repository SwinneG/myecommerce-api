const express = require('express')
// const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors')
const swaggerDocs = require('./swagger.js');


const app = express()
const port = process.env.PORT || 3000
swaggerDocs(app, port);

app
    // .use(favicon(__dirname + '/favicon.ico'))
    .use(bodyParser.json())
    .use(cors())

sequelize.initDb()

app.get('/', (req,res) => {
    res.json('Hello Gael')
})

//Ici nous placerons nos futurs endpoints
require('./src/routes/findAllCars')(app)
require('./src/routes/findCarByPk')(app)
require('./src/routes/createCar')(app)
require('./src/routes/updateCar')(app)
require('./src/routes/deleteCar')(app)
require('./src/routes/login')(app)

//On ajoute la gestion des erreurs 404
app.use(({res}) => {
    const message = "Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL"
    res.status(404).json({message})
})

app.listen(port, () => console.log(`Notre app Node est démarrée sur: http://localhost:${port}`))

