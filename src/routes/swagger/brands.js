
/**
 * @swagger
 * /brands: 
 *  get:
 *      summary: Returns the list of all brands
 *      tags: [Brands]
 *      responses:
 *          200:   
 *              description: The list of the brands
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Brand'
 */


/**
 * @swagger
 * /brands/{id}: 
 *  get:
 *      summary: Returns the brand by id
 *      tags: [Brands]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The brand id
 *      responses:
 *          200:   
 *              description: The brand description by id
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Brand'
 *          404: 
 *              description: the brand was not found
 */


/**
 * @swagger
 * /brands:
 *   post:
 *      summary: Create a new brand
 *      tags: [Brands]
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
 *              description: The brand was successfully created
 *              content: 
 *                  application/json: 
 *                      schema:
 *                          $ref: '#/components/schemas/Brand'
 *          500: 
 *              description: Some server error
 */


/**
 * @swagger
 * /brands/{id}:
 *  put:
 *      summary: Update the brand by id
 *      tags: [Brands]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The brand id
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
 *              description: The brand was updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Brand'
 *          404: 
 *              description: The brand was not found
 *          500:
 *              description: Some error happened
 */



/**
 * @swagger
 * /brands/{id}:
 *  delete:
 *      summary: Remove the brand by id
 *      tags: [Brands]
 *      parameters: 
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *            description: The brand id
 *      responses:
 *          200:
 *              description: The brand was deleted
 *          404:
 *              description: The brand was not found
 */
