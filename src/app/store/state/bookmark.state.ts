import { IBookmark } from '../../models/bookmark.interface';

export interface IBookmarkState {
  bookmarks: IBookmark[];
}

export const initialBookmarkState: IBookmarkState = {
  bookmarks: null
};
