
/**
 * @swagger
 * /extcolors: 
 *  get:
 *      summary: Returns the list of all exterior colors
 *      tags: [Exterior colors]
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
 *            description: Size limit of exterior colors
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The exterior colors list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ExtColor'
 *          404:
 *              description: The exterior colors list was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /extcolors/{id}: 
 *  get:
 *      summary: Returns the exterior color by id
 *      tags: [Exterior colors]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The exterior color id
 *      responses:
 *          200:   
 *              description: The exterior color has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/ExtColor'
 *          404: 
 *              description: The exterior color was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /extcolors:
 *   post:
 *      summary: Create a new exterior color
 *      tags: [Exterior colors]
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
 *              description: The exterior color was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/ExtColor'
 *          404:
 *              description: The exterior color was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /extcolors/{id}:
 *  put:
 *      summary: Update the exterior color by id
 *      tags: [Exterior colors]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The exterior color id
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
 *              description: The exterior color was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ExtColor'
 *          404: 
 *              description: The exterior color was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /extcolors/{id}:
 *  delete:
 *      summary: Remove the exterior color by id
 *      tags: [Exterior colors]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The exterior color id
 *      responses:
 *          200:
 *              description: The exterior color was successfully deleted
 *          404:
 *              description: The exterior color was not found
 *          500:
 *              description: Some server error
 */
