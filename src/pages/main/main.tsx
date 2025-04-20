import { useServerRequest } from "@/hooks";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { PostCard, Pagination, Search } from "./components";
import styles from "./main.module.css";
import { PostDataDTO } from "@/types";
import { PAGINATION_LIMIT, SEARCH_DELAY } from "@/constants";
import { getLastPageFromLinks, debounce } from "./utils";

export const Main = () => {
  const requestServer = useServerRequest();
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const [posts, setPosts] = useState<PostDataDTO[]>([]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, SEARCH_DELAY), []);

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchPhrase(event.target.value);
    startDelayedSearch(!shouldSearch);
  };

  useEffect(() => {
    requestServer("fetchPosts", searchPhrase, page, PAGINATION_LIMIT).then(
      ({
        res: { posts, links },
      }: {
        res: { posts: PostDataDTO[] | null; links: string | null };
      }) => {
        if (!posts) return;
        setPosts(posts);
        setLastPage(getLastPageFromLinks(links));
      }
    );
  }, [requestServer, page, shouldSearch]);

  return (
    <div className={styles.mainContainer}>
      <Search onChange={onSearch} searchPhrase={searchPhrase} />
      {posts.length ? (
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
      ) : (
        <div className={styles.noPostFound}>Статьи не найдены</div>
      )}

      {lastPage > 1 && (
        <div className={styles.paginationWrapper}>
          <Pagination setPage={setPage} page={page} lastPage={lastPage} />
        </div>
      )}
    </div>
  );
};
