
/**
 * @swagger
 * /models: 
 *  get:
 *      summary: Returns the list of all models
 *      tags: [Models]
 *      responses:
 *          200:   
 *              description: The list of the models
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Model'
 */


/**
 * @swagger
 * /models/{id}: 
 *  get:
 *      summary: Returns the model by id
 *      tags: [Models]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The model id
 *      responses:
 *          200:   
 *              description: The model description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Model'
 *          404: 
 *              description: the model was not found
 */


/**
 * @swagger
 * /models:
 *   post:
 *      summary: Create a new model
 *      tags: [Models]
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
 *              description: The model was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Model'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /models/{id}:
 *  put:
 *      summary: Update the model by id
 *      tags: [Models]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The model id
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
 *              description: The model was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Model'
 *          404: 
 *              description: The model was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /models/{id}:
 *  delete:
 *      summary: Remove the model by id
 *      tags: [Models]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The model id
 *      responses:
 *          200:
 *              description: The model was deleted
 *          404:
 *              description: The model was not found
 */
