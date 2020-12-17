//------------------------------------------REQUIRES------------------------------------------------------------

const router = require('express').Router();
const controller = require('../controllers/clientController');
module.exports = router;

//-------------------------------------------REQUIRES-----------------------------------------------------------

//-------------------------------------------CONTROLLERS--------------------------------------------------------

router.get('/client', controller.getClient);

router.post('/client', controller.createClient);

router.put('/client', controller.updateClient);

router.delete('/client/:id', controller.deleteClient);

//-------------------------------------------CONTROLLERS--------------------------------------------------------