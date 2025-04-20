export const deleteSession = async (sessionId: string) => {
  await fetch(`http://localhost:3333/sessions/${sessionId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};
