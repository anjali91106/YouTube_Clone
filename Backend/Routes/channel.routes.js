import { createChannel} from "../Controller/channel.controller.js"

const channelRoutes = (app) => {
    app.post("/channelpage", createChannel) //channel page 
}

export default channelRoutes;
