const { Router } = require('express');
const router = Router(); 
const sequelize = require('../db/sequelize')

//Images upload config
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        console.log('file:',file)
        // Use timestamp + originalName of the file => unique name
        cb(null, Date.now() + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Middleware
function fileHandler(modelName) {
    if (modelName === 'cars') {
        return upload.array('file');
    } else {
        return (req, res, next) => next();
    }
}
   
router.get('/:modelName', /*auth,*/ sequelize.getAll);
router.get('/:modelName/:id', /*auth,*/ sequelize.getById);
router.post('/:modelName', (req, res, next) => fileHandler(req.params.modelName)(req, res, next),/*auth,*/ sequelize.createId);
router.put('/:modelName/:id', (req, res, next) => fileHandler(req.params.modelName)(req, res, next), /*auth,*/ sequelize.updateId);
router.delete('/:modelName/:id', /*auth,*/ sequelize.deleteById);
  
module.exports = router;
