
/**
 * @swagger
 * /transmissions: 
 *  get:
 *      summary: Returns the list of all transmissions
 *      tags: [Transmissions]
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
 *            description: Size limit of transmissions
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The transmissions list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Transmissions'
 *          404:
 *              description: The transmissions list was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /transmissions/{id}: 
 *  get:
 *      summary: Returns the transmission by id
 *      tags: [Transmissions]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The transmissions id
 *      responses:
 *          200:   
 *              description: The transmission has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Transmissions'
 *          404: 
 *              description: The transmission was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /transmissions:
 *   post:
 *      summary: Create a new transmission
 *      tags: [Transmissions]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          type:
 *                              type: string
 *      responses:
 *          200:
 *              description: The transmission was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Transmissions'
 *          404:
 *              description: The transmission was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /transmissions/{id}:
 *  put:
 *      summary: Update the transmission by id
 *      tags: [Transmissions]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The transmission id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          type:
 *                              type: string
 *      responses:
 *          200:
 *              description: The transmission was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Transmissions'
 *          404: 
 *              description: The transmission was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /transmissions/{id}:
 *  delete:
 *      summary: Remove the transmission by id
 *      tags: [Transmissions]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The transmission id
 *      responses:
 *          200:
 *              description: The transmission was successfully deleted
 *          404:
 *              description: The transmission was not found
 *          500:
 *              description: Some server error
 */
