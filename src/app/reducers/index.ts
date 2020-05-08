import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createAction,
  createReducer,
  on,
  Action,
  props
} from '@ngrx/store';
import { environment } from '../../environments/environment';
export const LogAction = createAction('[Root] 1', props<{user: string}>());
export interface AppState {
  user: null;
}
export const initialState: AppState = {
  user: null
};
const rootReducer = createReducer(
  initialState,  on(LogAction, (state, {user}) => { return ({ ...state, user });
  }),

);
export function reducer(state: AppState | undefined, action: Action) {
  return rootReducer(state, action);
}

export interface RootState {
  app: AppState;
}
export const selectUser = (state: RootState) => {
  return state.app.user;
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
