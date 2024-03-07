
/**
 * @swagger
 * /equipmentCategories: 
 *  get:
 *      summary: Returns the list of all equipment categories
 *      tags: [EquipmentCategories]
 *      responses:
 *          200:   
 *              description: The list of the equipment categories
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/EquipmentCategory'
 */


/**
 * @swagger
 * /equipmentCategories/{id}: 
 *  get:
 *      summary: Returns the equipment category by id
 *      tags: [EquipmentCategories]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment category id
 *      responses:
 *          200:   
 *              description: The equipment category description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/EquipmentCategory'
 *          404: 
 *              description: the equipment category was not found
 */


/**
 * @swagger
 * /equipmentCategories:
 *   post:
 *      summary: Create a new equipment category
 *      tags: [EquipmentCategories]
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
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /equipmentCategories/{id}:
 *  put:
 *      summary: Update the equipment category by id
 *      tags: [EquipmentCategories]
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
 *              description: The equipment category was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/EquipmentCategory'
 *          404: 
 *              description: The equipment category was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /equipmentCategories/{id}:
 *  delete:
 *      summary: Remove the equipment category by id
 *      tags: [EquipmentCategories]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The equipment category id
 *      responses:
 *          200:
 *              description: The equipment category was deleted
 *          404:
 *              description: The equipment category was not found
 */
