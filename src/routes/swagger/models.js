
/**
 * @swagger
 * /models: 
 *  get:
 *      summary: Returns the list of all models
 *      tags: [Models]
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
 *            description: Size limit of models
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The models list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Model'
 *          404: 
 *              description: The models list was not found
 *          500:
 *              description: Some server error
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
 *              description: The model has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Model'
 *          404: 
 *              description: The model was not found
 *          500:
 *              description: Some server error
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
 *          404:
 *              description: The model was not found
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
 *              description: The model was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Model'
 *          404: 
 *              description: The model was not found
 *          500:
 *              description: Some server error
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
 *              description: The model was successfully deleted
 *          404:
 *              description: The model was not found
 *          500:
 *              description: Some server error
 */
