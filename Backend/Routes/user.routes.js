import { login, signUp } from "../Controller/user.controller.js"

export const userRoutes = (app) => {
  app.post("/user/signup", signUp)
  app.post("/user/login", login)
}
