import City from "../../models/City.js";

export default async (req,res,next)=> {
    try {
        let updatedCity = await City.findByIdAndUpdate(
            req.params.u_id,
            req.body,
            { new:true }    //por default en FALSE y devuelve el objeto ANTES de la modificación
            //si lo cambio a TRUE devuelve el objeto LUEGO de la modificaicón
        ).select('name photo mail')
        return res.status(200).json({
            success: true,
            message: 'City updated',
            response: updatedCity
        })
    } catch (error) {
        next(error)
    }
}