
/**
 * @swagger
 * /equipmentCategories: 
 *  get:
 *      summary: Returns the list of all equipment categories
 *      tags: [Equipment Categories]
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
 *            description: Size limit of equipment categories
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The equipment categories list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/EquipmentCategory'
 *          404:
 *              description: The equipment categories list was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /equipmentCategories/{id}: 
 *  get:
 *      summary: Returns the equipment category by id
 *      tags: [Equipment Categories]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment category id
 *      responses:
 *          200:   
 *              description: The equipment category has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/EquipmentCategory'
 *          404: 
 *              description: The equipment category was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /equipmentCategories:
 *   post:
 *      summary: Create a new equipment category
 *      tags: [Equipment Categories]
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
 *              description: The equipment category was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/EquipmentCategory'
 *          404:
 *              description: The equipment category was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /equipmentCategories/{id}:
 *  put:
 *      summary: Update the equipment category by id
 *      tags: [Equipment Categories]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment category id
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
 *              description: The equipment category was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/EquipmentCategory'
 *          404: 
 *              description: The equipment category was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /equipmentCategories/{id}:
 *  delete:
 *      summary: Remove the equipment category by id
 *      tags: [Equipment Categories]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment category id
 *      responses:
 *          200:
 *              description: The equipment category was successfully deleted
 *          404:
 *              description: The equipment category was not found
 *          500:
 *              description: Some server error
 */
