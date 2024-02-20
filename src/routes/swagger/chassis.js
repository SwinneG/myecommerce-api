
/**
 * @swagger
 * /chassis: 
 *  get:
 *      summary: Returns the list of all chassis
 *      tags: [Chassis]
 *      responses:
 *          200:   
 *              description: The list of the chassis
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Chassis'
 */


/**
 * @swagger
 * /chassis/{id}: 
 *  get:
 *      summary: Returns the chassis by id
 *      tags: [Chassis]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The chassis id
 *      responses:
 *          200:   
 *              description: The chassis description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Chassis'
 *          404: 
 *              description: the chassis was not found
 */


/**
 * @swagger
 * /chassis:
 *   post:
 *      summary: Create a new chassis
 *      tags: [Chassis]
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
 *              description: The chassis was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Chassis'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /chassis/{id}:
 *  put:
 *      summary: Update the chassis by id
 *      tags: [Chassis]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The chassis id
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
 *              description: The chassis was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Chassis'
 *          404: 
 *              description: The chassis was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /chassis/{id}:
 *  delete:
 *      summary: Remove the chassis by id
 *      tags: [Chassis]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The chassis id
 *      responses:
 *          200:
 *              description: The chassis was deleted
 *          404:
 *              description: The chassis was not found
 */
