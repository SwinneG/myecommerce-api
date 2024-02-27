/**
 * @swagger
 *  components:
 *      schemas:
 *          Cars:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the car 
 *                  name: 
 *                      type: string
 *                      description: The car name
 *                  picture:
 *                      type: string
 *                      description: The car picture
 *                  power:
 *                      type: integer
 *                      description: The car power
 *                  horses:
 *                      type: integer
 *                      description: The car horses
 *                  kms:
 *                      type: integer
 *                      description: The car kms
 *                  first_registration:
 *                      type: string
 *                      description: The car first registration
 *                  seating_places:
 *                      type: integer
 *                      description: The car seating places
 *                  doors:
 *                      type: integer
 *                      description: The car doors
 *                  co2:
 *                      type: integer
 *                      description: The car co2
 *                  price:
 *                      type: integer
 *                      description: The car price
 *                  fuelId:
 *                      $ref: '#/components/schemas/Fuel'
 *                  ext_color_id:
 *                      $ref: '#/components/schemas/ExtColor'
 *                  int_color_id:
 *                      $ref: '#/components/schemas/IntColor'
 *                  transmission_id:
 *                      $ref: '#/components/schemas/Transmission'
 *                  brandId: 
 *                      $ref: '#/components/schemas/Brand'
 *                  model_id:
 *                      $ref: '#/components/schemas/Model'
 *                  state_id:
 *                      $ref: '#/components/schemas/State'
 *                  chassis_id:
 *                      $ref: '#/components/schemas/Chassis'
 *                  equipment_id:
 *                      $ref: '#/components/schemas/Equipment'
 *          Fuel:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the fuel
 *                  name:
 *                      type: string
 *                      description: The fuel name
 *          ExtColor:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the exterior color
 *                  name:
 *                      type: string
 *                      description: The exterior color name
 *                  type:
 *                      type: string
 *                      description: The exterior color type
 *          IntColor:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the interior color
 *                  name:
 *                      type: string
 *                      description: The interior color name
 *          Transmission:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the transmission
 *                  name:
 *                      type: string
 *                      description: The transmission name
 *          Brand:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the brand
 *                  name:
 *                      type: string
 *                      description: The brand name
 *          Model:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the model
 *                  name:
 *                      type: string
 *                      description: The model name
 *          State:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the state
 *                  name:
 *                      type: string
 *                      description: The state name
 *          Chassis:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the chassis
 *                  name:
 *                      type: string
 *                      description: The chassis name
 *          Equipment:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the equipment
 *                  name:
 *                      type: string
 *                      description: The equipment name
 */

/**
 * @swagger 
 * tags:
 *  - name: Cars
 *    description: The cars requests
 *  - name: Fuels
 *    description: The fuels requests
 *  - name: Exterior colors
 *    description: The exterior colors requests
 *  - name: Interior colors
 *    description: The interior colors requests
 *  - name: Transmissions
 *    description: The transmissions requests
 *  - name: Brands
 *    description: The brands requests
 *  - name: Models
 *    decription: The models requests
 *  - name: States
 *    description: The states requests
 *  - name: Chassis
 *    description: The chassis requests
 *  - name: Equipments
 *    description: The equipments requests
 */
