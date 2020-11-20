//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('./clinicController');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------
router.get('/clinic', controller.getClinic);

router.post('/clinic', controller.createClinic);

router.put('/clinic', controller.updateClinic);

router.delete('/clinic/:id', controller.deleteClinic);
//-------------------------------------------CONTROLLERS--------------------------------------------------------