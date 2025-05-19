import { addComments, deleteComment, fetchComments, updateComment } from "../Controller/comments.controller.js";

export function commentRoute(app){
    app.get("/comments", fetchComments); //fetching all comments
    app.post("/addcomment", addComments); //adding a comment
    app.put('/comment/:id', updateComment); //updating an existing one
    app.delete('/comment/:id', deleteComment); //deleting a existing one
}

