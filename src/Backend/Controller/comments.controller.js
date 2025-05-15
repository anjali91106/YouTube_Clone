
import commentModel from "../Model/comments.model.js";

//fetch all thne data from the mongodb database 

export const fetchComments = (req, res) => {
  commentModel.find().then((data) => {
    if(!data){
        res.status(400).json({message: "Something went wrong while fetching all the data"});
    }

    res.send(data);
  }).catch(err => res.status(500)
  .json({message: "Internal server Error" || console.log(err.message) }));
}

//adding comments 

export const addComments = (req, res) => {
    const {commentId, userId, text, timestamp} = req.body;

    const newComment = new commentModel({
        commentId: commentId,
        userId: userId,
        text: text,
        timestamp: timestamp
    })

    newComment.save().then(data => {
        if(!data){
            return res.status(400)
            .json({message: "Something went wrong"});
        }

        res.json(data);
    })
}

//to delete a comment

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const deleted = await commentModel.findOneAndDelete({ commentId });

    if (!deleted) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment deleted successfully", deleted });
  } catch (err) {
    res.status(500).json({ message: "Error deleting comment", error: err });
  }
};

//to update a comment 

export const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { text } = req.body;

  try {
    const updated = await commentModel.findOneAndUpdate(
      { commentId },
      { text, timestamp: new Date().toISOString() },
      { new: true } // return the updated document
    );

    if (!updated) {
      return res.status(404).json({ message: "Comment not found" });
    }

    res.json({ message: "Comment updated successfully", updated });
  } catch (err) {
    res.status(500).json({ message: "Error updating comment", error: err });
  }
};








