import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const Post = ({ id, userImg, picture, caption, username }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt={username}
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img src={picture} alt={caption} className="object-cover h-auto w-full" />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username} </span>
        {caption}
      </p>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 mr-2" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};

export default Post;
