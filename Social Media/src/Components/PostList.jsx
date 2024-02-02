import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../Store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
function PostList() {
  const { postList, fetching } = useContext(PostListData);

  return (
    <>
    {fetching && <LoadingSpinner></LoadingSpinner>}
      { !fetching && postList.length === 0 && (
        <WelcomeMessage></WelcomeMessage>
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </> 
  );
}

export default PostList;
