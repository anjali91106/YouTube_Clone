import { addComments, deleteComment, fetchComments, updateComment } from "../Controller/comments.controller.js";

export function commentRoute(app){
    app.get("/comments", fetchComments);
    app.post("/addcomment", addComments);
    app.put("/comment/:commentId", updateComment);
    app.delete("/comment/:commentId", deleteComment);
}

