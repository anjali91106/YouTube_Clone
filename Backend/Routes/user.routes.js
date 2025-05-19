import { login, signUp } from "../Controller/user.controller.js"
import { logInVerification, signUpVerification } from "../Middleware/verification.middleware.js"

export const userRoutes = (app) => {
  app.post("/user/signup",signUpVerification, signUp)
  app.post("/user/login",logInVerification, login)
}
