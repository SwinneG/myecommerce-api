
/**
 * @swagger
 * /carImages: 
 *  get:
 *      summary: Returns the list of all car images
 *      tags: [Car Images]
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
 *            description: Size limit of car images
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The car images list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/CarImage'
 *          404:
 *              description: The car images list was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /carImages/{id}: 
 *  get:
 *      summary: Returns the car image by id
 *      tags: [Car Images]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car image id
 *      responses:
 *          200:   
 *              description: The car image has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/CarImage'
 *          404: 
 *              description: The car image was not found
 *          500:
 *              description: Some server error
 */


/**
 * @swagger
 * /carImages:
 *   post:
 *      summary: Create a new car image
 *      tags: [Car Images]
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
 *              description: The car image was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/CarImage'
 *          404:
 *              description: The car image was not found
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /carImages/{id}:
 *  put:
 *      summary: Update the car image by id
 *      tags: [Car Images]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car image id
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
 *              description: The car image was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/CarImage'
 *          404: 
 *              description: The car image was not found
 *          500:
 *              description: Some server error
 */



/**
 * @swagger
 * /carImages/{id}:
 *  delete:
 *      summary: Remove the car image by id
 *      tags: [Car Images]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car image id
 *      responses:
 *          200:
 *              description: The car image was successfully deleted
 *          404:
 *              description: The car image was not found
 *          500:
 *              description: Some server error
 */
