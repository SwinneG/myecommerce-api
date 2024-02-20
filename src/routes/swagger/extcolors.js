
/**
 * @swagger
 * /extcolors: 
 *  get:
 *      summary: Returns the list of all exterior colors
 *      tags: [Exterior colors]
 *      responses:
 *          200:   
 *              description: The list of the exterior colors
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/ExtColor'
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
 *              description: The exterior color description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/ExtColor'
 *          404: 
 *              description: the exterior color was not found
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
 *              description: The exterior color was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ExtColor'
 *          404: 
 *              description: The exterior color was not found
 *          500:
 *              description: Some error happened
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
 *              description: The exterior color was deleted
 *          404:
 *              description: The exterior color was not found
 */
