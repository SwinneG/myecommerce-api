
/**
 * @swagger
 * /brands: 
 *  get:
 *      summary: Returns the list of all brands
 *      tags: [Brands]
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
 *            description: Size limit of brands
 *            required: false
 *          - in: query
 *            name: query
 *            schema:
 *              type: string
 *            description: Search query name
 *            required: false
 *      responses:
 *          200:   
 *              description: The brands list has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Brand'
 *          500:
 *              description: Some server error
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
 *              description: The brand has been loaded successfully
 *              content: 
 *                  application/json:
 *                      schema: 
 *                         $ref: '#/components/schemas/Brand'
 *          404: 
 *              description: The brand was not found
 *          500:
 *              description: Some server error
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
 *          404:
 *              description: The brand was not found
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
 *              description: The brand was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Brand'
 *          404: 
 *              description: The brand was not found
 *          500:
 *              description: Some server error
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
 *              description: The brand was successfully deleted
 *          404:
 *              description: The brand was not found
 *          500:
 *              description: Some server error
 */
