
/**
 * @swagger
 * /states: 
 *  get:
 *      summary: Returns the list of all states
 *      tags: [States]
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
 *            description: Size limit of states
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The states list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/State'
 *          404:
 *              description: The states list was not found
 *          500:
 *              description: Some server error
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
 *              description: The state has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/State'
 *          404: 
 *              description: The state was not found
 *          500:
 *              description: Some server error
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
 *          404:
 *              description: The state was not found
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
 *              description: The state was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/State'
 *          404: 
 *              description: The state was not found
 *          500:
 *              description: Some server error
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
 *              description: The state was successfully deleted
 *          404:
 *              description: The state was not found
 *          500:
 *              description: Some server error
 */
