//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('./clinicController');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------
router.get('/clinic', controller.getclinic);

router.post('/clinic', controller.createclinic);

router.put('/clinic', controller.updateclinic);

router.delete('/clinic/:id', controller.deleteclinic);
//-------------------------------------------CONTROLLERS--------------------------------------------------------