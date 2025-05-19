import { login, signUp } from "../Controller/user.controller.js"
import { logInVerification, signUpVerification } from "../Middleware/verification.middleware.js"

export const userRoutes = (app) => {
  // verify their tokens too
  app.post("/user/signup",signUpVerification, signUp) //sign up a user
  app.post("/user/login",logInVerification, login) //login a user
}
