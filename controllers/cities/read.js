import City from "../../models/City.js";

export default async (req,res,next) => {
    //req: objeto con todos los requerimientos que envia el cliente
    //res: objeto de respuesta a devolver al cliente
    try {
       let allCities = await City.find().select('country city photo smalldescription admin_id').populate('admin_id','photo name mail -_id')
        //find BUSCA todos (en este caso usuarios)
        return res.status(200).json({
            success: true,
            message: 'cities found',
            response:  allCities
        })
    } catch (error) {
        console.log(err)
        
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}