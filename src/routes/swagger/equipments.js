
/**
 * @swagger
 * /equipments: 
 *  get:
 *      summary: Returns the list of all equipments
 *      tags: [Equipments]
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
 *            description: Size limit of equipments
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The equipments list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Equipment'
 *          404:
 *              description: The equipments list was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /equipments/{id}: 
 *  get:
 *      summary: Returns the equipment by id
 *      tags: [Equipments]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
 *      responses:
 *          200:   
 *              description: The equipment has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Equipment'
 *          404: 
 *              description: The equipment was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /equipments:
 *   post:
 *      summary: Create a new equipment
 *      tags: [Equipments]
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
 *              description: The equipment was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Equipment'
 *          404:
 *              description: The equipment was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /equipments/{id}:
 *  put:
 *      summary: Update the equipment by id
 *      tags: [Equipments]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
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
 *              description: The equipment was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Equipment'
 *          404: 
 *              description: The equipment was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /equipments/{id}:
 *  delete:
 *      summary: Remove the equipment by id
 *      tags: [Equipments]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment id
 *      responses:
 *          200:
 *              description: The equipment was successfully deleted
 *          404:
 *              description: The equipment was not found
 *          500:
 *              description: Some server error
 */
