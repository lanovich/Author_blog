import { useEffect } from "react";
import { useStore } from "react-redux";
import { RootState } from "../store";

export const useResetForm = (reset: () => void) => {
  const store = useStore<RootState>();

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout;

    return store.subscribe(() => {
      let prevWasLogout = currentWasLogout;
      currentWasLogout = store.getState().app.wasLogout;

      if (currentWasLogout !== prevWasLogout) {
        reset();
      }
    });
  }, [reset, store]);
};
