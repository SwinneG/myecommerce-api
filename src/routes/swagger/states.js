
/**
 * @swagger
 * /states: 
 *  get:
 *      summary: Returns the list of all states
 *      tags: [States]
 *      responses:
 *          200:   
 *              description: The list of the states
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/State'
 */


/**
 * @swagger
 * /states/{id}: 
 *  get:
 *      summary: Returns the state by id
 *      tags: [States]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The state id
 *      responses:
 *          200:   
 *              description: The state description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/State'
 *          404: 
 *              description: the state was not found
 */


/**
 * @swagger
 * /states:
 *   post:
 *      summary: Create a new state
 *      tags: [States]
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
 *              description: The state was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/State'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /states/{id}:
 *  put:
 *      summary: Update the state by id
 *      tags: [States]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The state id
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
 *              description: The state was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/State'
 *          404: 
 *              description: The state was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /states/{id}:
 *  delete:
 *      summary: Remove the state by id
 *      tags: [States]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The state id
 *      responses:
 *          200:
 *              description: The state was deleted
 *          404:
 *              description: The state was not found
 */
