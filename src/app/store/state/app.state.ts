import { IBookmarkState, initialBookmarkState } from './bookmark.state';
import { IFormState, initialFormState } from './form.state';


export interface IAppState {
  bookmarks: IBookmarkState;
  form?: IFormState;
}

export const initialAppState: IAppState = {
  bookmarks: initialBookmarkState,
  form: initialFormState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
