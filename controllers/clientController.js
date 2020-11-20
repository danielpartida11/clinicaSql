//-----------------------------------------GET------------------------------------------------------------------
module.exports.client = async(req, res) =>{

    const clients = await client.find();
    res.json(clients);

};
//-------------------------------------------------------GET----------------------------------------------------

//----------------------------------------------POST------------------------------------------------------------
module.exports.createClient = async(req, res) =>{

    const client = new Client(req.body);
    await client.save();
    res.json(client);

};
//-----------------------------------------------------POST-----------------------------------------------------

//-----------------------------------------------PATH-----------------------------------------------------------
module.exports.updateClient = async (req, res) => {
    
    const client = await Client.findById(req.body.id);
    appointment.name = req.body.name;
    await client.save();
    res.json(client);

};
//----------------------------------------------------PATH------------------------------------------------------

//----------------------------------------------DELETE----------------------------------------------------------
module.exports.deleteClient = async (req, res) => {

    const {id} = req.params;
    const client = await Client.findById(id);
    await Client.deleteOne(client);
    res.json('Cliente Borrado');

};
//----------------------------------------------------DELETE-----------------------------------------------------