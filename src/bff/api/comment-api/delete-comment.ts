export const deleteComment = async (id: string) => {
  await fetch(`http://localhost:3333/comments/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};
