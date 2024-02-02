import { createContext, useReducer, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // for creating unique id each time user add a post

export const PostList = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
  // addInitialPosts: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      if (post.id !== action.payload.postID) {
        return true;
      } else {
        return false;
      }
    });
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
    // [DEFAULT_POST_LIST]
  );

  const [fetching, setFetching] = useState(false);

 

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,

      // {
      //   id: uuidv4(),
      //   title: postTitle,
      //   body: postBody,
      //   reactions: reactions,
      //   userId: userId,
      //   tags: tags,
      // },
    });
  };

  const addInitialPosts = ({ posts }) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (postID) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postID,
      },
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts({ posts: data.posts });
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        fetching : fetching,
        // addInitialPosts: addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Going to Mumbai",
//     body: "Hi Friends, I am going to mumbai for my vacations. Hope to enjoy a lot. Peace out.",
//     reactions: 2,
//     userID: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "London Diaries",
//     body: "WELL, LONDON IS NOT THAT BAD AS IT SEEMS",
//     reactions: 15,
//     userID: "user-12",
//     tags: ["london", "goodgoing", "nightlife"],
//   },
// ];
export default PostListProvider;
