import joi from "joi"

export const signUpVerification = (req, res, next) => {
    // adding signup varification 
    const Schema = joi.object({
        // all three are required
        username: joi.string().min(3).max(100).required(), //user name should be in the length of 3 to 100
        email: joi.string().email().required(), //a valid email 
        password: joi.string().min(3).max(100).required() //password should be in the length of 3 to 100
    })

    const {error} = Schema.validate(req.body);

    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }

    next();
}


export const logInVerification = (req, res, next) => {
    // login lavidation
    const Schema = joi.object({
        email: joi.string().email().required(), //email required with proper form
        password: joi.string().min(3).max(100).required() //password should be in the length of 3 to 100
    })

    const {error} = Schema.validate(req.body);

    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }

    next();
}

