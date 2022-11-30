const router = require('express').Router();
const carController = require('../controllers/carController');

router.post("/car", carController.createController);

router.get('/cars', carController.getAllController);

router.get('/car/:id', carController.getByIdController);

router.put('/car/:id', carController.updateController);

router.delete('/car/:id', carController.deleteController);

module.exports = router;