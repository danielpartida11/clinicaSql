//-----------------------------------------GET------------------------------------------------------------------
module.exports.appointment = async(req, res) =>{

    const appointments = await appointment.find();
    res.json(appointments);

};
//-------------------------------------------------------GET----------------------------------------------------

//----------------------------------------------POST------------------------------------------------------------
module.exports.createappointment = async(req, res) =>{

    const appointment = new Appointment(req.body);
    await appointment.save();
    res.json(appointment);

};
//-----------------------------------------------------POST-----------------------------------------------------

//-----------------------------------------------PATH-----------------------------------------------------------
module.exports.updateAppointment = async (req, res) => {
    
    const appointment = await Appointment.findById(req.body.id);
    appointment.title = req.body.room;
    await appointment.save();
    res.json(appointment);

};
//----------------------------------------------------PATH------------------------------------------------------

//----------------------------------------------DELETE----------------------------------------------------------
module.exports.deleteAppointment = async (req, res) => {

    const {id} = req.params;
    const appointment = await Appointment.findById(id);
    await Appointment.deleteOne(movie);
    res.json('Sala cerrada');

};
//----------------------------------------------------DELETE-----------------------------------------------------