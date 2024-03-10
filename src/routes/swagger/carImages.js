
/**
 * @swagger
 * /carImages: 
 *  get:
 *      summary: Returns the list of all car images
 *      tags: [Car Images]
 *      responses:
 *          200:   
 *              description: The list of the car images
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/CarImage'
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
 *              description: The car image description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/CarImage'
 *          404: 
 *              description: the car image was not found
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
 *              description: The car image was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/CarImage'
 *          404: 
 *              description: The car image was not found
 *          500:
 *              description: Some error happened
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
 *              description: The car image was deleted
 *          404:
 *              description: The car image was not found
 */
