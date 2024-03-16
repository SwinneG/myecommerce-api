
/**
 * @swagger
 * /chassis: 
 *  get:
 *      summary: Returns the list of all chassis
 *      tags: [Chassis]
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
 *            description: Size limit of chassis
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The chassis list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Chassis'
 *          404:
 *              description: The chassis list was not found
 *          500:
 *              description: Some server error
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
 *              description: The chassis has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Chassis'
 *          404: 
 *              description: The chassis was not found
 *          500:
 *              description: Some server error
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
 *          404:
 *              description: The chassis was not found
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
 *              description: The chassis was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Chassis'
 *          404: 
 *              description: The chassis was not found
 *          500:
 *              description: Some server error
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
 *              description: The chassis was successfully deleted
 *          404:
 *              description: The chassis was not found
 *          500:
 *              description: Some server error
 */
