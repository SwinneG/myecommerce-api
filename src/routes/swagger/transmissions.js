
/**
 * @swagger
 * /transmissions: 
 *  get:
 *      summary: Returns the list of all transmissions
 *      tags: [Transmissions]
 *      responses:
 *          200:   
 *              description: The list of the transmissions
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Transmissions'
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
 *              description: The transmission description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Transmissions'
 *          404: 
 *              description: the transmission was not found
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
 *              description: The transmission was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Transmissions'
 *          404: 
 *              description: The transmission was not found
 *          500:
 *              description: Some error happened
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
 *              description: The transmission was deleted
 *          404:
 *              description: The transmission was not found
 */
