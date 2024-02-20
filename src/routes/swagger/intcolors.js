
/**
 * @swagger
 * /intcolors: 
 *  get:
 *      summary: Returns the list of all interior colors
 *      tags: [Interior colors]
 *      responses:
 *          200:   
 *              description: The list of the interior colors
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/IntColor'
 */


/**
 * @swagger
 * /intcolors/{id}: 
 *  get:
 *      summary: Returns the interior color by id
 *      tags: [Interior colors]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The interior color id
 *      responses:
 *          200:   
 *              description: The interior color description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/IntColor'
 *          404: 
 *              description: the interior color was not found
 */


/**
 * @swagger
 * /intcolors:
 *   post:
 *      summary: Create a new interior color
 *      tags: [Interior colors]
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
 *              description: The interior color was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/IntColor'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /intcolors/{id}:
 *  put:
 *      summary: Update the interior color by id
 *      tags: [Interior colors]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The interior color id
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
 *              description: The interior color was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/IntColor'
 *          404: 
 *              description: The interior color was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /intcolors/{id}:
 *  delete:
 *      summary: Remove the interior color by id
 *      tags: [Interior colors]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The interior color id
 *      responses:
 *          200:
 *              description: The interior color was deleted
 *          404:
 *              description: The interior color was not found
 */
