
/**
 * @swagger
 * /equipments: 
 *  get:
 *      summary: Returns the list of all equipments
 *      tags: [Equipments]
 *      responses:
 *          200:   
 *              description: The list of the equipments
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Equipment'
 */


/**
 * @swagger
 * /equipments/{id}: 
 *  get:
 *      summary: Returns the equipment by id
 *      tags: [Equipments]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
 *      responses:
 *          200:   
 *              description: The equipment description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Equipment'
 *          404: 
 *              description: the equipment was not found
 */


/**
 * @swagger
 * /equipments:
 *   post:
 *      summary: Create a new equipment
 *      tags: [Equipments]
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
 *              description: The equipment was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Equipment'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /equipments/{id}:
 *  put:
 *      summary: Update the equipment by id
 *      tags: [Equipments]
 *      parameters:
 *          - in: path
 *            name: id
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
 *              description: The equipment was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Equipment'
 *          404: 
 *              description: The equipmen was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /equipments/{id}:
 *  delete:
 *      summary: Remove the equipment by id
 *      tags: [Equipments]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
 *      responses:
 *          200:
 *              description: The equipment was deleted
 *          404:
 *              description: The equipment was not found
 */
