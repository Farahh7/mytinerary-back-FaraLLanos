import City from "../../models/City.js";

export default async (req,res) => {
    try {
        let oneCity= await City.findOne({ _id:req.params.id })        //busca segun el objeto de condiciones (en este caso le paso el id, podria pasarle el mail, el nombre, etc)
        //let oneUserId = await City.findById(req.params.user_id)           //busca solo por id
        
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCity
        })
    } catch (error) {
        next(error)
    }
    }