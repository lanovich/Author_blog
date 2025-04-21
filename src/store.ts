import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
  AnyAction,
} from "redux";
import { ThunkAction, thunk } from "redux-thunk";
import { userReducer } from "./reducers/user-reducer";
import { postReducer } from "./reducers/post-reducer";
import { appReducer } from "./reducers/app-reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
  app: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
