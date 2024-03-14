
/**
 * @swagger
 * /cars: 
 *  get:
 *      summary: Returns the list of all cars
 *      tags: [Cars]
 *      parameters:
 *          - in: query
 *            name: page
 *            schema:
 *              type: integer
 *            description: Number of the page that we want display
 *          - in: query
 *            name: size
 *            schema:
 *              type: integer
 *            description: Size limit of cars
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *      responses:
 *          200:
 *              description: The list of the cars
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cars'
 */


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
 *                         $ref: '#/components/schemas/Cars'
 *          404: 
 *              description: the car was not found
 */

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
 *                           $ref: '#/components/schemas/Cars'
 *      responses:
 *          200:
 *              description: The car was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Cars'
 *          500: 
 *              description: Some server error
 */


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
 *                          id:
 *                              type: integer
 *                              description: The id of the car
 *                          name:
 *                              type: string
 *                              description: The name of the car
 *                          power:
 *                              type: integer
 *                              description: The power of the car
 *                          nb_horses:
 *                              type: integer
 *                              description: The horses'number of the car
 *                          first_registration_date:
 *                              type: string
 *                              description: The date of the first registration of the car
 *                          nb_seating_places:
 *                              type: integer
 *                              description: The number of seating places of the car
 *                          nb_doors:
 *                              type: integer
 *                              description: The number of doors of the car
 *                          co2:
 *                              type: integer
 *                              description: The number of CO2
 *                          regular_price:
 *                              type: integer
 *                              description: The regular price of the car
 *                          currency:
 *                              type: string
 *                              description: The currency
 *                          fuelId:
 *                              type: integer
 *                              description: The foreign key of fuel
 *                          extcolorId:
 *                              type: integer
 *                              description: The foreign key of extcolor
 *                          intcolorId:
 *                              type: integer
 *                              description: The foreign key of intcolor
 *                          transmissionId:
 *                              type: integer
 *                              description: The foreign key of transmission
 *                          brandId:
 *                              type: integer
 *                              description: The foreign key of brand
 *                          modelId:
 *                              type: integer
 *                              description: The foreign key of model
 *                          stateId:
 *                              type: integer
 *                              description: The foreign key of state
 *                          chassisId:
 *                              type: integer
 *                              description: The foreign key of chassis
 *                          equipmentId:
 *                              type: integer
 *                              description: The foreign key of equipment
 *                          equipmentCategoryId:
 *                              type: integer
 *                              description: The foreign key of equipmentCategory
 *                          userId:
 *                              type: integer
 *                              description: The foreign key of user
 *      responses:
 *          200:
 *              description: The car was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Cars'
 *          404: 
 *              description: The car was not found
 *          500:
 *              description: Some error happened
 */



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
 *              description: The car was deleted
 *          404:
 *              description: The car was not found
 */
