import { useEffect, useState } from "react";
import { useMatch, useParams } from "react-router-dom";
import { useServerRequest } from "@/hooks";
import { loadPostAsync, RESET_POST_DATA } from "@/actions";
import { Comments, PostContent, PostForm } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { initialPostState } from "@/reducers/post-reducer";
import { selectPost } from "@/selectors";
import styles from "./post.module.css";
import { PostData } from "@/types";
import { ErrorMessage, PrivateContent } from "@/components/shared";
import { ROLE_IDS } from "@/constants";

type RouteParams = {
  postId: string;
};

export const Post = () => {
  const post = useSelector(selectPost);
  const params = useParams<RouteParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null | boolean>(null);
  const dispatch = useDispatch();
  const isCreating = useMatch("/post");
  const isEditing = useMatch("/post/:id/edit");
  const requestServer = useServerRequest();

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      dispatch(RESET_POST_DATA);
      setError(null);
    }
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (!isCreating && params.postId) {
      dispatch(loadPostAsync(requestServer, params.postId) as any)
        .then((postData: { error: null | string; res: PostData }) => {
          setError(postData.error);
          setIsLoading(false);
        })
        .finally(() => {});
    }
  }, [dispatch, requestServer, params.postId, isCreating]);

  if (isLoading) {
    return null;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return isCreating || isEditing ? (
    <PrivateContent access={[ROLE_IDS.ADMIN]} serverError={error}>
      <div className={styles.container}>
        <PostForm post={isCreating ? initialPostState : post} />
      </div>
    </PrivateContent>
  ) : (
    <>
      <div className={styles.container}>
        <PostContent post={post} />
        <Comments comments={post?.comments || []} postId={params.postId || ""} />
      </div>
    </>
  );
};
