const express = require('express');
const router = express.Router();
const { ValidationError, UniqueConstraintError } = require('sequelize')
const auth = require('../auth/auth')
const { Fuel } = require('../db/sequelize')


/**
 * @swagger
 * /fuel: 
 *  get:
 *      summary: Returns the list of all fuels
 *      tags: [Fuel]
 *      responses:
 *          200:   
 *              description: The list of the fuel
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Fuel'
 */
router.get('/', /*auth,*/ (req, res) => {
       
    Fuel.findAll({
        // order: ['name']
    })
    .then(fuels => {
        const message = 'La liste des carburants a bien été récupérée.'
        res.json({ message, data: fuels })
    })
    .catch(error => {
        const message = `La liste des carburants n'a pas pu être récupérée. Reessayez dans quelques instants`
        res.status(500).json({message, data: error})
    })

})

/**
 * @swagger
 * /fuel/{id}: 
 *  get:
 *      summary: Returns the fuel by id
 *      tags: [Fuel]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The fuel id
 *      responses:
 *          200:   
 *              description: The fuel description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Fuel'
 *          404: 
 *              description: the fuel was not found
 */
router.get('/:id', /*auth,*/ (req, res) => {
    Fuel.findByPk(req.params.id)
        .then(fuel => {
            if(fuel === null) {
                const message = `Le carburant demandé n'existe pas. Reessayez avec un autre identifiant.`
                return res.status(404).json({message})
            }
            const message = 'Un carburant a bien été trouvé.'
            res.json({ message, data: fuel })
        })
        .catch(error => {
            const message = `Le carburant n'a pas pu être récupéré. Reessayez dans quelques instants`
            res.status(500).json({message, data: error})
        })
})

/**
 * @swagger
 * /fuel:
 *   post:
 *      summary: Create a new fuel
 *      tags: [Fuel]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: The fuel was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Fuel'
 *          500: 
 *              description: Some server error
 */
router.post('/', /*auth,*/ (req, res) => {
    Fuel.create(req.body)
        .then(fuel => {
            const message = `Le carburant ${req.body.name} a bien été créé.`
            res.json({ message, data: fuel })
        })
        .catch(error => {
            if(error instanceof ValidationError) {
                return res.status(400).json({ message: error.message, data: error });
            }
            if(error instanceof UniqueConstraintError) {
                return res.status(400).json({ message: 'error.message', data: error });
            }
            const message = `Le carburant n'a pas pu être ajouté. Reessayez dans quelques instants`
            res.status(500).json({message, data: error})
        })
})

/**
 * @swagger
 * /fuel/{id}:
 *  put:
 *      summary: Update the fuel by id
 *      tags: [Fuel]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The fuel id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *      responses:
 *          200:
 *              description: The fuel was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Fuel'
 *          404: 
 *              description: The fuel was not found
 *          500:
 *              description: Some error happened
 */
router.put('/:id', /*auth,*/ (req, res) => {
    const id = req.params.id
    Fuel.update(req.body, {
        where: { id: id }
    })
    .then(_ => {
        return Fuel.findByPk(id).then(fuel => {
            if(fuel === null){
                const message = `Le carburant demandé n'existe pas. Rééssayez avec un autre identifiant`
                return res.status(404).json({message})
            }
            const message = `Le carburant ${fuel.name} a bien été modifiée.`
            res.json({message, data: fuel })
        })
    })
    .catch(error => {
        if(error instanceof ValidationError){
            return res.status(400).json({message: error.message, data:error})
        }
        if(error instanceof UniqueConstraintError){
            return res.status(400).json({message: error.message, data:error})
        }
        const message = `La liste des carburants n'a pas pu être modifiée. Reessayez dans quelques instants`
        res.status(500).json({message, data: error})
    })
})


/**
 * @swagger
 * /fuel/{id}:
 *  delete:
 *      summary: Remove the fuel by id
 *      tags: [Fuel]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The fuel id
 *      responses:
 *          200:
 *              description: The fuel was deleted
 *          404:
 *              description: The fuel was not found
 */
router.delete('/:id', /*auth,*/ (req, res) => {
    Fuel.findByPk(req.params.id).then(fuel => {  
        if(fuel === null) {
            const message = `Le carburant demandé n'existe pas. Reessayez avec un autre identifiant`
            return res.status(404).json({message})
        }    
        const fuelDeleted = fuel;  
        Fuel.destroy({ 
            where: { id: fuel.id } 
        })
        .then(_ => {
            const message = `Le carburant avec l'identifiant n°${fuel.id} a bien été supprimé.`
            res.json({message, data: fuelDeleted })
        })
    })
    .catch(error => {
        const message = `La liste des carburants n'a pas pu être supprimée. Reessayez dans quelques instants`
        res.status(500).json({message, data: error})
    })
})



module.exports = router;