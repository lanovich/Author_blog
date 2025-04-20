import { useEffect } from "react";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "@/hooks";
import { loadPostAsync, RESET_POST_DATA } from "@/actions";
import { Comments, PostContent, PostForm } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { initialPostState } from "@/reducers/post-reducer";
import { selectPost } from "@/selectors";
import styles from "./post.module.css";
import { PostData } from "@/types";

type RouteParams = {
  postId: string;
};

export const Post = () => {
  const post: PostData = useSelector(selectPost);
  const params = useParams<RouteParams>();
  const dispatch = useDispatch();
  const isCreating = useMatch("/post");
  const isEditing = useMatch("/post/:id/edit");
  const requestServer = useServerRequest();

  useEffect(() => {
    if (isCreating) {
      dispatch(RESET_POST_DATA);
    }
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (!isCreating && params.postId) {
      dispatch(loadPostAsync(requestServer, params.postId) as any);
    }
  }, [dispatch, requestServer, params.postId, isCreating]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {isCreating || isEditing ? (
        <PostForm post={isCreating ? initialPostState : post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={params.postId || ""} />
        </>
      )}
    </div>
  );
};
