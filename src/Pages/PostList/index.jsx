import React from "react";
import { useSelector } from "react-redux";
import PostCard from "../../Components/PostCard";

const PostList = () => {
  const postList = useSelector((store) => store.post.posts);
  return (
    <div className="m-5">
      <h1 className="text-xl font-semibold">Post List</h1>
      {postList &&
        postList.map((postItem, index) => {
          return (
            <PostCard
              key={index}
              postId={index}
              userEmail={postItem.userEmail}
              userImage={postItem.userImage}
              userName={postItem.userName}
              date={postItem.postDate}
              time={postItem.postTime}
              description={postItem.postDescription}
              mediaList={postItem.postMedias}
            />
          );
        })}
    </div>
  );
};

export default PostList;
