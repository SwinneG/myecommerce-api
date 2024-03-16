
/**
 * @swagger
 * /fuels: 
 *  get:
 *      summary: Returns the list of all fuels
 *      tags: [Fuels]
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
 *            description: Size limit of fuels
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The fuels list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Fuel'
 *          404:
 *              description: The fuels list was not found
 *          500:
 *              description: Some server error
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
 *              description: The fuel has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Fuel'
 *          404: 
 *              description: The fuel was not found
 *          500:
 *              description: Some server error
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
 *          404:
 *              description: The fuel was not found
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
 *              description: The fuel was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Fuel'
 *          404: 
 *              description: The fuel was not found
 *          500:
 *              description: Some server error
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
 *              description: The fuel was successfully deleted
 *          404:
 *              description: The fuel was not found
 *          500:
 *              description: Some server error
 */