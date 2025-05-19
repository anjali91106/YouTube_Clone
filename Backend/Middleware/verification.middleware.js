import joi from "joi"

export const signUpVerification = (req, res, next) => {
    const Schema = joi.object({
        username: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().required()
    })

    const {error} = Schema.validate(req.body);

    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }

    next();
}


export const logInVerification = (req, res, next) => {
    const Schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })

    const {error} = Schema.validate(req.body);

    if(error){
        return res.status(400)
        .json({message: "Bad request", error})
    }

    next();
}

