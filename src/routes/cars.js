const express = require('express');
const router = express.Router();
const { ValidationError, UniqueConstraintError } = require('sequelize')
const { Op } = require('sequelize')
const auth = require('../auth/auth')
const { Car } = require('../db/sequelize')



/**
 * @swagger
 *  components:
 *      schemas:
 *          Car:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the car 
 *                  name: 
 *                      type: string
 *                      description: The car name
 *                  picture:
 *                      type: string
 *                      description: The car picture
 *                  power:
 *                      type: integer
 *                      description: The car power
 *                  horses:
 *                      type: integer
 *                      description: The car horses
 *                  kms:
 *                      type: integer
 *                      description: The car kms
 *                  first_registration:
 *                      type: string
 *                      description: The car first registration
 *                  seating_places:
 *                      type: integer
 *                      description: The car seating places
 *                  doors:
 *                      type: integer
 *                      description: The car doors
 *                  co2:
 *                      type: integer
 *                      description: The car co2
 *                  price:
 *                      type: integer
 *                      description: The car price
 *                  fuel_id:
 *                      $ref: '#/components/schemas/Fuel'
 *                  ext_color_id:
 *                      $ref: '#/components/schemas/ExtColor'
 *                  int_color_id:
 *                      $ref: '#/components/schemas/IntColor'
 *                  transmission_id:
 *                      $ref: '#/components/schemas/Transmission'
 *                  brand_id: 
 *                      $ref: '#/components/schemas/Brand'
 *                  model_id:
 *                      $ref: '#/components/schemas/Model'
 *                  state_id:
 *                      $ref: '#/components/schemas/State'
 *                  chassis_id:
 *                      $ref: '#/components/schemas/Chassis'
 *                  equipment_id:
 *                      $ref: '#/components/schemas/Equipment'
 *          Fuel:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the fuel
 *                  name:
 *                      type: string
 *                      description: The fuel name
 *          ExtColor:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the ext color
 *                  name:
 *                      type: string
 *                      description: The ext color name
 *                  type:
 *                      type: string
 *                      description: The ext color type
 *          IntColor:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the int color
 *                  name:
 *                      type: string
 *                      description: The int color name
 *          Transmission:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the transmission
 *                  name:
 *                      type: string
 *                      description: The transmission name
 *          Brand:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the brand
 *                  name:
 *                      type: string
 *                      description: The brand name
 *          Model:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the model
 *                  name:
 *                      type: string
 *                      description: The model name
 *          State:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the state
 *                  name:
 *                      type: string
 *                      description: The state name
 *          Chassis:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the chassis
 *                  name:
 *                      type: string
 *                      description: The chassis name
 *          Equipment:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the equipment
 *                  name:
 *                      type: string
 *                      description: The equipment name
 */

/**
 * @swagger 
 * tags:
 *      name: Cars
 *      description: The cars managing API
 */

/**
 * @swagger
 * /cars: 
 *  get:
 *      summary: Returns the list of all cars
 *      tags: [Cars]
 *      responses:
 *          200:   
 *              description: The list of the cars
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Car'
 */
router.get('/', /*auth,*/ (req, res) => {
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
            // order: ['name']
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

/**
 * @swagger
 * /cars/{id}: 
 *  get:
 *      summary: Returns the car by id
 *      tags: [Cars]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *      responses:
 *          200:   
 *              description: The car description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Car'
 *          404: 
 *              description: the car was not found
 */
router.get('/:id', /*auth,*/ (req, res) => {
    Car.findByPk(req.params.id)
        .then(car => {
        if(car === null) {
            const message = `La voiturée demandée n'existe pas. Reessayez avec un autre identifiant.`
            return res.status(404).json({message})
        }
        const message = 'Une voiture a bien été trouvé.'
        res.json({ message, data: car })
        })
        .catch(error => {
        const message = `La voiture n'a pas pu être récupérée. Reessayez dans quelques instants`
        res.status(500).json({message, data: error})
        })
})

/**
 * @swagger
 * /cars:
 *   post:
 *      summary: Create a new car
 *      tags: [Cars]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          picture:
 *                              type: string
 *                          power:
 *                              type: integer
 *                          horses:
 *                              type: integer
 *                          kms:
 *                              type: integer
 *                          first_registration:
 *                              type: string
 *                          seating_places:
 *                              type: integer
 *                          doors:
 *                              type: integer
 *                          co2:
 *                              type: integer
 *                          price:
 *                              type: integer
 *                          fuel_id:
 *                              type: integer
 *                          ext_color_id:
 *                              type: integer
 *                          int_color_id:
 *                              type: integer
 *                          transmission_id:
 *                              type: integer
 *                          brand_id:
 *                              type: integer
 *                          model_id:
 *                              type: integer
 *                          state_id:
 *                              type: integer
 *                          chassis_id:
 *                              type: integer
 *                          equipment_id:
 *                              type: integer
 *      responses:
 *          200:
 *              description: The car was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Car'
 *          500: 
 *              description: Some server error
 */
router.post('/', /*auth,*/ (req, res) => {
    Car.create(req.body)
        .then(car => {
        const message = `La voiture ${req.body.name} a bien été créée.`
        res.json({ message, data: car })
        })
        .catch(error => {
        if(error instanceof ValidationError) {
            return res.status(400).json({ message: error.message, data: error });
        }
        if(error instanceof UniqueConstraintError) {
            return res.status(400).json({ message: 'error.message', data: error });
        }
        const message = `La voiture n'a pas pu être ajoutée. Reessayez dans quelques instants`
        res.status(500).json({message, data: error})
        })
})

/**
 * @swagger
 * /cars/{id}:
 *  put:
 *      summary: Update the car by id
 *      tags: [Cars]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          picture:
 *                              type: string
 *                          power:
 *                              type: integer
 *                          horses:
 *                              type: integer
 *                          kms:
 *                              type: integer
 *                          first_registration:
 *                              type: string
 *                          seating_places:
 *                              type: integer
 *                          doors:
 *                              type: integer
 *                          co2:
 *                              type: integer
 *                          price:
 *                              type: integer
 *                          fuel_id:
 *                              type: integer
 *                          ext_color_id:
 *                              type: integer
 *                          int_color_id:
 *                              type: integer
 *                          transmission_id:
 *                              type: integer
 *                          brand_id:
 *                              type: integer
 *                          model_id:
 *                              type: integer
 *                          state_id:
 *                              type: integer
 *                          chassis_id:
 *                              type: integer
 *                          equipment_id:
 *                              type: integer
 *      responses:
 *          200:
 *              description: The book was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Car'
 *          404: 
 *              description: The book was not found
 *          500:
 *              description: Some error happened
 */
router.put('/:id', /*auth,*/ (req, res) => {
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
        const message = `La voiture ${car.name} a bien été modifiée.`
        res.json({message, data: car })
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


/**
 * @swagger
 * /cars/{id}:
 *  delete:
 *      summary: Remove the car by id
 *      tags: [Cars]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *      responses:
 *          200:
 *              description: The book was deleted
 *          404:
 *              description: The book was not found
 */
router.delete('/:id', /*auth,*/ (req, res) => {
    Car.findByPk(req.params.id).then(car => {  
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



module.exports = router;