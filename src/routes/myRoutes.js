const { Router } = require('express');  
const myControllers = require('../controllers/myControllers'); 
const router = Router(); 
   
router.get('/:modelName', /*auth,*/ myControllers.getAll);
router.get('/:modelName/by/page', /*auth,*/ myControllers.getByPage);
router.get('/:modelName/search', /*auth,*/ myControllers.searchByPage);
router.get('/:modelName/:id', /*auth,*/ myControllers.getById);
router.post('/:modelName', /*auth,*/ myControllers.createId);
router.put('/:modelName/:id', /*auth,*/ myControllers.updateId);
router.delete('/:modelName/:id', /*auth,*/ myControllers.deleteById);
  
module.exports = router;