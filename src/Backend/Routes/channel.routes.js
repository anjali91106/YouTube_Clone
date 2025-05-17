import { createChannel} from "../Controller/channel.controller.js"

const channelRoutes = (app) => {
    app.post("/channelpage", createChannel)
}

export default channelRoutes;
