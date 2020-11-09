//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('./servicesMovie');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------
router.get('/client', controller.getclient);

router.post('/client', controller.createclient);

router.put('/client', controller.updateclient);

router.delete('/client/:id', controller.deleteclient);
//-------------------------------------------CONTROLLERS--------------------------------------------------------