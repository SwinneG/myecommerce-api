const { Router } = require('express');
const router = Router(); 
const sequelize = require('../db/sequelize')
   
router.get('/:modelName', /*auth,*/ sequelize.getAll);
router.get('/:modelName/:id', /*auth,*/ sequelize.getById);
router.post('/:modelName', /*auth,*/ sequelize.createId);
router.put('/:modelName/:id', /*auth,*/ sequelize.updateId);
router.delete('/:modelName/:id', /*auth,*/ sequelize.deleteById);
  
module.exports = router;