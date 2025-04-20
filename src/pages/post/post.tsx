import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServerRequest } from "@/hooks";
import { loadPostAsync } from "@/actions";
import { Comments, PostContent } from "./components";
import { useDispatch, useSelector } from "react-redux";
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
  const requestServer = useServerRequest();

  useEffect(() => {
    if (params.postId) {
      dispatch(loadPostAsync(requestServer, params.postId) as any);
    }
  }, [dispatch, requestServer, params.postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={params.postId || ""}/>
    </div>
  );
};

