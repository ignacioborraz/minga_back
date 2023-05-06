import Author from "../../models/Author.js"

let read = async(req,res,next)=> {
    try {
        let all = await Author.find()
        return res.status(200).json({
            success: 'ok',
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default read