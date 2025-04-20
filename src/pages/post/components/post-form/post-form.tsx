import { Icon, Input } from "@/components/shared";
import { useRef } from "react";
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
  const imageRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const onSave = () => {
    const newImageUrl = imageRef.current?.value;
    const newTitle = titleRef.current?.value;
    const newContent = sanitizeContent(contentRef.current?.innerHTML || "");
    console.log(newImageUrl, newTitle, newContent);

    dispatch(
      savePostAsync(requestServer, {
        id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent,
      })
    ).then(() => navigate(`/post/${id}`));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputs}>
        <div>
          <label>Ссылка на изображение</label>
          <Input
            ref={imageRef}
            defaultValue={imageUrl}
            width={"100%"}
            placeholder="Изображение..."
          />
        </div>
        <div>
          <label>Заголовок</label>
          <Input
            ref={titleRef}
            defaultValue={title}
            width={"100%"}
            placeholder="Заголовок..."
          />
        </div>
      </div>
      <SpecialPanel publishedAt={publishedAt}>
        <Icon
          code={"fa-floppy-o"}
          margin={"0 20px 0 0"}
          onClick={onSave}
          fontSize={"21px"}
        />
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
