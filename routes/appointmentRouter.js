//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('./appointmentController');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------
router.get('/appointment', controller.getappointment);

router.post('/appointment', controller.createappointment);

router.put('/appointment', controller.updateappointment);

router.delete('/appointment/:id', controller.deleteappointment);
//-------------------------------------------CONTROLLERS--------------------------------------------------------