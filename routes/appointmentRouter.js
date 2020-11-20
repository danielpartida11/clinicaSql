//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('./appointmentController');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------
router.get('/appointment', controller.getAppointment);

router.post('/appointment', controller.createAppointment);

router.put('/appointment', controller.updateAppointment);

router.delete('/appointment/:id', controller.deleteAppointment);
//-------------------------------------------CONTROLLERS--------------------------------------------------------