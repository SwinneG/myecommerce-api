
/**
 * @swagger
 * /users: 
 *  get:
 *      summary: Returns the list of all users
 *      tags: [Users]
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
 *            description: Size limit of users
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The users list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/User'
 *          404:
 *              description: The users list was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /users/{id}: 
 *  get:
 *      summary: Returns the user by id
 *      tags: [Users]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The user id
 *      responses:
 *          200:   
 *              description: The user has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/User'
 *          404: 
 *              description: The user was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /users:
 *   post:
 *      summary: Create a new user
 *      tags: [Users]
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
 *              description: The user was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404:
 *              description: The user was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: Update the user by id
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The user id
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
 *              description: The user was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          404: 
 *              description: The user was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: Remove the user by id
 *      tags: [Users]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The user id
 *      responses:
 *          200:
 *              description: The user was successfully deleted
 *          404:
 *              description: The user was not found
 *          500:
 *              description: Some server error
 */
