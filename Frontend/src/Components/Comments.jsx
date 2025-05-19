import { useEffect, useState } from "react";
import axios from "axios";

const Comments = () => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <AddComment />
      <AllComments />
    </div>
  );
};

//add comment

export const AddComment = () => {
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);
  const Api = "http://localhost:8080/addcomment";

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment = {
      commentId: "comment" + Math.floor(Math.random() * 10000),
      userId: "user" + Math.floor(Math.random() * 10000),
      text: text,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await axios.post(Api, newComment);
      setComments((prev) => [res.data, ...prev]);
      setText("");
    } catch (err) {
      console.log("Error posting comment:", err);
    }
  };

  return (
    <>
      <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-2 mb-6">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border rounded-lg p-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((c) => (
          <CommentCard key={c.commentId} comment={c} />
        ))}
      </div>
    </>
  );
};

//printing alll comments

export const AllComments = () => {
  const [comm, setComm] = useState([]);
  const Api = "http://localhost:8080/comments";

  
    const fetchComments = async () => {
      try {
        let res = await axios.get(Api);
        setComm(res.data);
      } catch (err) {
        console.log("Error fetching comments:", err);
      }
    };

    useEffect(() => {

    fetchComments();
  }, []);

  return (
    <div className="space-y-4">
      {comm.map((comment) => (
        <CommentCard key={comment.commentId} comment={comment} onUpdate={fetchComments}/>
      ))}
    </div>
  );
};

//comment ui structure
const CommentCard = ({ comment, onUpdate }) => {
  return (
    <div className="p-4 border rounded-lg shadow bg-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
      <div className="flex-1">
        <p className="text-sm font-semibold">{comment.userId}</p>
        <p className="text-sm font-semibold">{comment.commentId}</p>
        <p className="text-xs text-gray-500">
          {new Date(comment.timestamp).toLocaleString()}
        </p>
        <p className="text-gray-800 mt-1">{comment.text}</p>
      </div>
      <div className="flex gap-2">
        <UpdateComments commentId={comment._id} existingText={comment.text} onUpdate={onUpdate}/>
        <DeleteComments commentId={comment._id} onUpdate={onUpdate}/>
      </div>
    </div>
  );
};

//update a comment

export const UpdateComments = ({ commentId, existingText, onUpdate }) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedComment, setUpdatedComment] = useState(existingText);
  const Api = `http://localhost:8080/comment/${commentId}`;

  const handleSave = async () => {
    try {
      await axios.put(Api, { text: updatedComment });
      console.log("Updated successfully");
      setIsUpdate(false);
      onUpdate()
    } catch (err) {
      console.error("Update failed:", err);
    }
  };


  return isUpdate ? (
    <>
      <input
        value={updatedComment}
        onChange={(e) => setUpdatedComment(e.target.value)}
        className="border p-1 rounded text-sm"
      />
      <button
        onClick={handleSave}
        className="bg-green-600 text-white px-2 py-1 rounded text-sm hover:bg-green-700"
      >
        Save
      </button>
    </>
  ) : (
    <button
      onClick={() => setIsUpdate(true)}
      className="bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700"
    >
      Edit
    </button>
  );
};

//delete a comment

export const DeleteComments = ({ commentId, onUpdate }) => {
  const Api = `http://localhost:8080/comment/${commentId}`;

  const handleDelete = async () => {
    try {
      await axios.delete(Api);
      console.log("Deleted");
      onUpdate() // Refresh to reflect deletion
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 text-white px-2 py-1 rounded text-sm hover:bg-red-700"
    >
      Delete
    </button>
  );
};

export default Comments;
