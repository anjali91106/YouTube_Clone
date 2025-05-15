import { useEffect, useState } from "react"
import axios from "axios";
import Buttons from "./Buttons";

const Comments = () => {
   return (
    <> 
      <Addcomment/>
      <UpdateComments/>
      <DeleteComments/>
      <AllComments/>
    </>
   )
}

export const Addcomment = () => {
  const [text, setText] = useState("");
    const [comments, setComments] = useState([]);
    const Api = "http://localhost:8080/addcomment"

    const handleAddComment = async (e) => {
        e.preventDefault();
        console.log("comment posted")

        if(!text.trim()) return;

        const newComment = {
                commentId: "comment" + Math.floor(Math.random() * 10000),
                userId: "user" + Math.floor(Math.random() * 10000),
                text: text,
                timestamp: new Date().toISOString()
        }

         try {
            const res = await axios.post(Api, newComment);
            console.log("server Response", res.data)

            // Add the new comment to the top
            setComments(prev => [res.data, ...prev]);
            setText(''); // Clear input
            } catch (err) {
               console.log("Error posting comment:", err);
            }
    }
  return (
    <div>
        <form onSubmit={handleAddComment}>
             <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a comment..."
                className="border rounded-lg p-2 m-2"
            />
        <button
          type="submit"
          className="self-end px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Post Comment
        </button>
        </form>
             

            <div className="mt-6 space-y-4">
            {comments.map((c, index) => (
          <div key={index} className="p-3 border rounded-lg shadow-sm bg-gray-100 m-2">
            <div className="flex">
              <Buttons/>
              <button className="border rounded p-2">edit</button>
            </div> 
            <h4 className="text-sm font-semibold">{c.userId}</h4>
            <p className="text-sm font-semibold">{c.commentId}</p>
            <p className="text-gray-800">{c.text}</p>
            <p className="text-sm text-gray-500">{new Date(c.timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export const UpdateComments = () => {
    const Api = "http://localhost:8080/comment/:commentId"

    useEffect(() => {
      const update = async () => {
       let res = await axios.put()
      }
    },[])

    return (
      <>
      
      </>
    )
}

export const DeleteComments = () => {
  const Api = "http://localhost:8080/comment/:commentId"

  return (
    <>
    
    </>
  )
}

export const AllComments = () => {
  const [comm, setComm] = useState([]);
  const Api = "http://localhost:8080/comments"

  useEffect(() => {
     const fetchComments = async () => {
      try{
         let res = await axios.get(Api);
        setComm(res.data)
      }catch(err){
        console.log("Some Error Occured when fetching the comments", err);
      }
     }

     fetchComments()
  },[])

  return (
    <>
      <div className="space-y-3">
            {comm.map((comment, index) => (
              <div key={index} className="p-3 border rounded-lg shadow-sm bg-gray-100 m-2">
              <div className="flex">
                  <Buttons/>
                  <button className="border rounded p-2 hover:bg-blue-700">edit</button>
              </div>
                <h4 className="font-semibold text-sm">{comment.userId}</h4>
                <h4 className="font-semibold text-sm">{comment.commentId}</h4>
                <p className="text-sm">{comment.text}</p>
                <p className="text-xs text-gray-500">{comment.timestamp}</p>
              </div>
            ))}
          </div>
    </>
  )
}


export default Comments
