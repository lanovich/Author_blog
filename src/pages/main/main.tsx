import { useServerRequest } from "@/hooks";
import { useEffect, useState } from "react";
import { PostCard } from "./components";
import styles from "./main.module.css";
import { PostDataDTO } from "@/types";

export const Main = () => {
  const requestServer = useServerRequest();
  const [posts, setPosts] = useState<PostDataDTO[]>([]);

  useEffect(() => {
    requestServer("fetchPosts").then(
      (posts: { error: string | null; res: PostDataDTO[] }) => {
        if (posts.error) return;
        setPosts(posts.res);
      }
    );
  }, []);

  console.log(posts);

  return (
    <div className={styles.grid}>
      {posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
        <PostCard
          key={id}
          id={id}
          imageUrl={imageUrl}
          title={title}
          publishedAt={publishedAt}
          commentsCount={commentsCount}
        />
      ))}
    </div>
  );
};
