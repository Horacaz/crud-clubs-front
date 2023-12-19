import { useContext, useCallback } from "react";
import { ClubsContext, ClubsDispatchContext } from "../context/clubsContext";
import { State, Action } from "../types/clubs";

export default function useClubsApp<T>() {
  const state = useContext(ClubsContext) as State<T>;
  const dispatch = useContext(ClubsDispatchContext) as React.Dispatch<
    Action<T>
  >;

  const handleLoadingAction = useCallback(() => {
    dispatch({
      type: "LOADING",
      payload: {
        loading: true,
        error: null,
        data: null,
      },
    });
  }, [dispatch]);

  const handleSuccessAction = useCallback(
    (data: T) => {
      dispatch({
        type: "SUCCESS",
        payload: {
          loading: false,
          data,
          error: null,
        },
      });
    },
    [dispatch],
  );

  const handleErrorAction = useCallback(
    (error: Error) => {
      dispatch({
        type: "ERROR",
        payload: {
          loading: false,
          data: null,
          error,
        },
      });
    },
    [dispatch],
  );
  return {
    state,
    handleLoadingAction,
    handleSuccessAction,
    handleErrorAction,
  };
}
