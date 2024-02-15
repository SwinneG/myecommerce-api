const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')
// const carsRouter = require('./src/routes/cars');

const options = {
    definition: {
    openapi: '3.0.0',
    info: {
        title: 'My Ecommerce API',
        description: "API endpoints for myEcommerce project documented on swagger",
        contact: {
        name: "Gaël Swinne",
        email: "swinne.gael@gmail.com",
        url: ""
        },
        version: '1.0.0',
    },
    servers: [
        {
        url: "http://localhost:3000/",
        description: "Local server"
        },
       /* {
        url: "",
        description: "Live server"
        },*/
    ]
    },
    // looks for configuration in specified directories
    apis: ['./src/routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = function swaggerDocs(app, port) {
    // Swagger Page
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Documentation in JSON format
    app.get('/api-docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}
