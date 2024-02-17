const { Router } = require('express');  
const myControllers = require('../controllers/myControllers'); 
const router = Router(); 
  
// Requests  
// router.get('/cars', /*auth,*/ myControllers.getAll); 
router.get('/:modelName', /*auth,*/ myControllers.getAll);
// router.post('/', myControllers.method2); 
  
module.exports = router;