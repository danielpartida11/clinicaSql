//-----------------------------------------GET------------------------------------------------------------------
module.exports.getClinic = async(req, res) =>{

    const clinics = await clinic.find();
    res.json(clinics);

};
//-------------------------------------------------------GET----------------------------------------------------

//----------------------------------------------POST------------------------------------------------------------
module.exports.createClinic = async(req, res) =>{

    const clinic = new Clinic(req.body);
    await clinic.save();
    res.json(clinic);

};
//-----------------------------------------------------POST-----------------------------------------------------

//-----------------------------------------------PATH-----------------------------------------------------------
module.exports.updateClinic = async (req, res) => {
    
    const clinic = await Clinic.findById(req.body.id);
    clinic.name = req.body.name;
    await clinic.save();
    res.json(clinic);

};
//----------------------------------------------------PATH------------------------------------------------------

//----------------------------------------------DELETE----------------------------------------------------------
module.exports.deleteClinic = async (req, res) => {

    const {id} = req.params;
    const clinic = await Clinic.findById(id);
    await Clinic.deleteOne(client);
    res.json('Saliste de la ClinicaSql');

};
//----------------------------------------------------DELETE-----------------------------------------------------