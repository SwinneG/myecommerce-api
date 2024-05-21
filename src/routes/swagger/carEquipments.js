
/**
 * @swagger
 * /carEquipments: 
 *  get:
 *      summary: Returns the list of all car equipments
 *      tags: [Car equipments]
 *      parameters:
 *          - in: query
 *            name: page
 *            schema:
 *              type: integer
 *            description: Number of the page that we want display
 *            required: false
 *          - in: query
 *            name: size
 *            schema:
 *              type: integer
 *            description: Size limit of car images
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The car equipments list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/CarEquipment'
 *          404:
 *              description: The car equipments list was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /carEquipments/{carId}/{equipmentId}: 
 *  get:
 *      summary: Returns the car equipment by id
 *      tags: [Car equipments]
 *      parameters: 
 *          - in: path
 *            name: carId
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *          - in: path
 *            name: equipmentId
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
 *      responses:
 *          200:   
 *              description: The car equipment has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/CarEquipment'
 *          404: 
 *              description: The car equipment was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /carEquipments:
 *   post:
 *      summary: Create a new car equipments
 *      tags: [Car equipments]
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
 *              description: The car equipments was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/CarEquipment'
 *          404:
 *              description: The car equipments was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /carEquipments/{carId}/{equipmentId}:
 *  put:
 *      summary: Update the car equipments by id
 *      tags: [Car equipments]
 *      parameters:
 *          - in: path
 *            name: carId
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *          - in: path
 *            name: equipmentId
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
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
 *              description: The car equipments was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/CarEquipment'
 *          404: 
 *              description: The car equipments was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /carEquipments/{id}:
 *  delete:
 *      summary: Remove the car equipments by id
 *      tags: [Car equipments]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car equipments id
 *      responses:
 *          200:
 *              description: The car equipments was successfully deleted
 *          404:
 *              description: The car equipments was not found
 *          500:
 *              description: Some server error
 */
