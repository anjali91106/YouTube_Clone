import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

const Buttons = () => {
    const [isLikeClicked, setIsLikeClicked] = useState(false);
    const [isDislikeClicked, setIsDislikeClicked] = useState(false);

    // like and dislike buttons 
  return (
    <>
      <LikeButton 
      isLikeClicked={isLikeClicked} 
      setIsDislikeClicked={setIsDislikeClicked} 
      setIsLikeClicked={setIsLikeClicked} />
      
      <DisLikeButton isDislikeClicked={isDislikeClicked} 
      setIsDislikeClicked={setIsDislikeClicked} 
      setIsLikeClicked={setIsLikeClicked}/>
    </>
  )
} 

export const LikeButton = ({ isLikeClicked, setIsDislikeClicked, setIsLikeClicked}) => {
  // if like is clicked dislike should not show if dislike is clicked like should not show
    function handleLike() {
    setIsLikeClicked(true);
    setIsDislikeClicked(false);
  }
    return (
        <>
          <div className="flex items-center gap-2 mb-1">
                            <button
                              onClick={handleLike}
                              className={`p-1 rounded ${
                                isLikeClicked ? "bg-blue-700 text-white" : "text-gray-700"
                              }`}
                            >
                              <ThumbsUp size={16} />
                            </button>
                          </div>
        </>
    )
}

export const DisLikeButton = ({isDislikeClicked, setIsDislikeClicked, setIsLikeClicked}) => {
    
      function handleDisLike() {
      setIsLikeClicked(false);
      setIsDislikeClicked(true);
  }
   return (
    <>
      <div className="flex items-center gap-2 mb-1">
                        <button
                          onClick={handleDisLike}
                          className={`p-1 rounded ${
                            isDislikeClicked
                              ? "bg-blue-700 text-white"
                              : "text-gray-700"
                          }`}
                        >
                          <ThumbsDown size={16} />
                        </button>
                      </div>
    </>
   )
}

export default Buttons;

