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
 *                  power:
 *                      type: integer
 *                      description: The car power
 *                  nb_horses:
 *                      type: integer
 *                      description: The car horses
 *                  nb_kms:
 *                      type: integer
 *                      description: The car kms
 *                  first_registration_date:
 *                      type: string
 *                      description: The car first registration
 *                  nb_seating_places:
 *                      type: integer
 *                      description: The car seating places
 *                  nb_doors:
 *                      type: integer
 *                      description: The car doors
 *                  co2:
 *                      type: integer
 *                      description: The car co2
 *                  regular_price:
 *                      type: integer
 *                      description: The car price
 *                  currency:
 *                      type: string
 *                      description: The price currency
 *                  fuelId:
 *                      type: integer
 *                      description: The foreign key of fuel
 *                  fuel:
 *                      $ref: '#/components/schemas/Fuel'
 *                  extcolorId:
 *                      type: integer
 *                      description: The foreign key of extcolor
 *                  extcolor:
 *                      $ref: '#/components/schemas/ExtColor'
 *                  intcolorId:
 *                      type: integer
 *                      description: The foreign key of intcolor
 *                  intcolor:
 *                      $ref: '#/components/schemas/IntColor'
 *                  transmissionId:
 *                      type: integer
 *                      description: The foreign key of transmission
 *                  transmission:
 *                      $ref: '#/components/schemas/Transmission'
 *                  brandId: 
 *                      type: integer
 *                      description: The foreign key of brand
 *                  brand:
 *                      $ref: '#/components/schemas/Brand'
 *                  modelId:
 *                      type: integer
 *                      description: The foreign key of model
 *                  model:
 *                      $ref: '#/components/schemas/Model'
 *                  stateId:
 *                      type: integer
 *                      description: The foreign key of state
 *                  state:
 *                      $ref: '#/components/schemas/State'
 *                  chassisId:
 *                      type: integer
 *                      description: The foreign key of chassis
 *                  chassis:
 *                      $ref: '#/components/schemas/Chassis'
 *                  equipmentId:
 *                      type: integer
 *                      description: The foreign key of equipment
 *                  equipment:
 *                      $ref: '#/components/schemas/Equipment'
 *                  equipmentCategoryId:
 *                      type: integer
 *                      description: The foreign key of equipment category
 *                  equipmentCategory:
 *                      $ref: '#/components/schemas/EquipmentCategory'
 *                  carImages:
 *                      type: array
 *                      items:
 *                          $ref: '#/components/schemas/CarImage'
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
 *                  equipmentCategoryId:
 *                      $ref: '#/components/schemas/EquipmentCategory'
 *          EquipmentCategory:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated id of the equipment category
 *                  name:
 *                      type: string
 *                      description: The equipment category name
 *          CarImage:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The auto-generated if of the car images
 *                  image:
 *                      type: object
 *                      properties:
 *                          type:
 *                              type: string
 *                              description: The type of blob
 *                          data:
 *                              type: string
 *                              format: binary
 *                              description: The blob
 *                  carId:
 *                      type: integer
 *                      description: The foreign key of car
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
 *  - name: Equipment Categories
 *    description: The equipment categories requests
 *  - name: Car Images
 *    description: The car images requests
 */
