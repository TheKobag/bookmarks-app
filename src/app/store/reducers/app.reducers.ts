import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { bookmarkReducers } from './bookmark.reducers';
import { formReducer } from './form.reducer';

export const appReducers: ActionReducerMap<IAppState, any> = {
  bookmarks: bookmarkReducers,
  form: formReducer
};
