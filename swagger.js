const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')

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
        // {
        // url: "http://localhost:3000/",
        // description: "Local server"
        // },
       {
        url: "https://easy-jade-bull-toga.cyclic.app/",
        description: "Live server"
        }
    ]
    },
    apis: ['./src/routes/swagger/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

module.exports = function swaggerDocs(app) {
    // Swagger Page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Documentation in JSON format
    app.get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}
