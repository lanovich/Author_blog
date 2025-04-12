import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
  Action,
} from "redux";
import { ThunkAction, thunk } from "redux-thunk";
import {
  userReducer,
  usersReducer,
  postReducer,
  postsReducer,
  appReducer,
} from "./reducers";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer,
  app: appReducer,
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const composeEnhancers: typeof compose =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
