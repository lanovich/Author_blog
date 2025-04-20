export const deleteSession = async (sessionId: string) => {
  await fetch(`/api/sessions/${sessionId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
};
