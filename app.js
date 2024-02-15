const express = require('express')
// const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const sequelize = require('./src/db/sequelize')
const cors = require('cors')
const swaggerDocs = require('./swagger.js')

const app = express()
const port = process.env.PORT || 3000
swaggerDocs(app, port);

const carsRouter = require('./src/routes/cars');

app
    // .use(favicon(__dirname + '/favicon.ico'))
    .use(bodyParser.json())
    .use(cors())
    .use('/cars', carsRouter);

sequelize.initDb()

//On ajoute la gestion des erreurs 404
app.use(({ res }) => {
    const message = "Impossible de trouver la ressource demandée! Vous pouvez essayer une autre URL"
    res.status(404).json({ message })
})

app.listen(port, () => console.log(`Notre app Node est démarrée sur: http://localhost:${port}`))

