import { Icon, Input } from "@/components/shared";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { PostData } from "@/types";
import styles from "./post-form.module.css";
import { SpecialPanel } from "../special-panel/special-panel";
import { sanitizeContent } from "./utils";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { savePostAsync } from "@/actions";
import { useServerRequest } from "@/hooks";

interface Props {
  post: PostData;
}

export const PostForm: React.FC<Props> = ({ post }) => {
  const { id, content, imageUrl, publishedAt, title } = post;
  const requestServer = useServerRequest();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contentRef = useRef<HTMLDivElement>(null);

  const [newImageUrl, setNewImageUrl] = useState(imageUrl);
  const [newTitle, setNewTitle] = useState(title);

  useEffect(() => {
    setNewImageUrl(imageUrl);
    setNewTitle(title);
  }, [imageUrl, title]);

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewImageUrl(event.target.value);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current?.innerHTML || "");

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent,
      })
    ).then(({ id }: { id: string }) => navigate(`/post/${id}`));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <div>
          <label>Ссылка на изображение</label>
          <Input
            value={newImageUrl}
            onChange={onImageChange}
            width={"100%"}
            placeholder="Изображение..."
          />
        </div>
        <div>
          <label>Заголовок</label>
          <Input
            value={newTitle}
            onChange={onTitleChange}
            width={"100%"}
            placeholder="Заголовок..."
          />
        </div>
      </div>
      <SpecialPanel publishedAt={publishedAt} postId={id}>
        <Icon code={"fa-floppy-o"} onClick={onSave} fontSize={"21px"} margin={0} />
      </SpecialPanel>
      <div
        ref={contentRef}
        contentEditable
        suppressContentEditableWarning
        className={styles.content}
      >
        {content}
      </div>
    </div>
  );
};
