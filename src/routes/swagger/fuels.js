
/**
 * @swagger
 * /fuels: 
 *  get:
 *      summary: Returns the list of all fuels
 *      tags: [Fuels]
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


/**
 * @swagger
 * /fuels/{id}: 
 *  get:
 *      summary: Returns the fuel by id
 *      tags: [Fuels]
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

/**
 * @swagger
 * /fuels:
 *   post:
 *      summary: Create a new fuel
 *      tags: [Fuels]
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


/**
 * @swagger
 * /fuels/{id}:
 *  put:
 *      summary: Update the fuel by id
 *      tags: [Fuels]
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


/**
 * @swagger
 * /fuels/{id}:
 *  delete:
 *      summary: Remove the fuel by id
 *      tags: [Fuels]
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