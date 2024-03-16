
/**
 * @swagger
 * /intcolors: 
 *  get:
 *      summary: Returns the list of all interior colors
 *      tags: [Interior colors]
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
 *            description: Size limit of interior colors
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The interior colors list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/IntColor'
 *          404:
 *              description: The interior colors list was not found
 *          500:
 *              description: Some server error
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
 *              description: The interior color has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/IntColor'
 *          404: 
 *              description: The interior color was not found
 *          500:
 *              description: Some server error
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
 *          404:
 *              description: The interior color was not found
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
 *              description: The interior color was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/IntColor'
 *          404: 
 *              description: The interior color was not found
 *          500:
 *              description: Some server error
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
 *              description: The interior color was successfully deleted
 *          404:
 *              description: The interior color was not found
 *          500:
 *              description: Some server error
 */
