import { server } from "@/bff";
import { selectUserSession } from "@/selectors";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return useCallback(
    (operation: string, ...params: any) => {
      const request = ["register", "authorize", "fetchPost", "fetchPosts"].includes(
        operation
      )
        ? params
        : [session, ...params];

      return server[operation](...request);
    },
    [session]
  );
};
