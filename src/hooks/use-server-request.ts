import { server } from "@/bff";
import { sessions } from "@/bff/sessions";
import { selectUserSession } from "@/selectors";
import { useCallback } from "react";
import { useSelector } from "react-redux";

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return useCallback((operation, ...params) => {
    const request = ["register", "authorize"].includes(operation)
      ? params
      : [session, ...params];

    return server[operation](...request);
  }, [session]);
};
