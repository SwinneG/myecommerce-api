
/**
 * @swagger
 * /cars: 
 *  get:
 *      summary: Returns the list of all cars
 *      tags: [Cars]
 *      responses:
 *          200:   
 *              description: The list of the cars
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cars'
 */

/**
 * @swagger
 * /cars/by/page: 
 *  get:
 *      summary: Returns the list of all cars by page
 *      tags: [Cars]
 *      parameters:
 *          - in: query
 *            name: page
 *            schema:
 *              type: integer
 *            description: Number of the page that we want display
 *          - in: query
 *            name: size
 *            schema:
 *              type: integer
 *            description: Size limit of cars by page
 *      responses:
 *          200:   
 *              description: The list of the cars by page
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Cars'
 */


/**
 * @swagger
 * /cars/{id}: 
 *  get:
 *      summary: Returns the car by id
 *      tags: [Cars]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *      responses:
 *          200:   
 *              description: The car description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Cars'
 *          404: 
 *              description: the car was not found
 */

/**
* @swagger
* /cars/search: 
*  get:
*      summary: Returns the list of search term
*      tags: [Cars]
*      parameters:
*          - in: query
*            name: query
*            schema:
*              type: string
*            description: Search query name
*      responses:
*          200:   
*              description: The list of the cars by page
*              content: 
*                  application/json:
*                      schema: 
*                          type: array
*                          items:
*                              $ref: '#/components/schemas/Cars'
*/


/**
 * @swagger
 * /cars:
 *   post:
 *      summary: Create a new car
 *      tags: [Cars]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          picture:
 *                              type: string
 *                          power:
 *                              type: integer
 *                          horses:
 *                              type: integer
 *                          kms:
 *                              type: integer
 *                          first_registration:
 *                              type: string
 *                          seating_places:
 *                              type: integer
 *                          doors:
 *                              type: integer
 *                          co2:
 *                              type: integer
 *                          price:
 *                              type: integer
 *                          fuel_id:
 *                              type: integer
 *                          ext_color_id:
 *                              type: integer
 *                          int_color_id:
 *                              type: integer
 *                          transmission_id:
 *                              type: integer
 *                          brand_id:
 *                              type: integer
 *                          model_id:
 *                              type: integer
 *                          state_id:
 *                              type: integer
 *                          chassis_id:
 *                              type: integer
 *                          equipment_id:
 *                              type: integer
 *      responses:
 *          200:
 *              description: The car was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Cars'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /cars/{id}:
 *  put:
 *      summary: Update the car by id
 *      tags: [Cars]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *      requestBody:
 *          required: true
 *          content:
 *              application/json: 
 *                  schema: 
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                          picture:
 *                              type: string
 *                          power:
 *                              type: integer
 *                          horses:
 *                              type: integer
 *                          kms:
 *                              type: integer
 *                          first_registration:
 *                              type: string
 *                          seating_places:
 *                              type: integer
 *                          doors:
 *                              type: integer
 *                          co2:
 *                              type: integer
 *                          price:
 *                              type: integer
 *                          fuel_id:
 *                              type: integer
 *                          ext_color_id:
 *                              type: integer
 *                          int_color_id:
 *                              type: integer
 *                          transmission_id:
 *                              type: integer
 *                          brand_id:
 *                              type: integer
 *                          model_id:
 *                              type: integer
 *                          state_id:
 *                              type: integer
 *                          chassis_id:
 *                              type: integer
 *                          equipment_id:
 *                              type: integer
 *      responses:
 *          200:
 *              description: The car was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Cars'
 *          404: 
 *              description: The car was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /cars/{id}:
 *  delete:
 *      summary: Remove the car by id
 *      tags: [Cars]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The car id
 *      responses:
 *          200:
 *              description: The car was deleted
 *          404:
 *              description: The car was not found
 */
