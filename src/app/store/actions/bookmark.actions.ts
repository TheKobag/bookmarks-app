import { Action } from '@ngrx/store';
import { IBookmark } from '../../models/bookmark.interface';

export enum EBookmarkActions {
  GetBookmarks = '[Bookmark] Get Bookmarks',
  GetBookmarksSuccess = '[Bookmark] Get Bookmarks Success',
  AddBookmark = '[Bookmark] Add Bookmark',
  AddBookmarkSuccess = '[Bookmark] Add Bookmark Success',
  RemoveBookmark = '[Bookmark] Remove Bookmark',
}

export class GetBookmarks implements Action {
  public readonly type = EBookmarkActions.GetBookmarks;
}

export class GetBookmarksSuccess implements Action {
  public readonly type = EBookmarkActions.GetBookmarksSuccess;
  constructor(public payload: IBookmark[]) {}
}

export class AddBookmarkAction implements Action {
  public readonly type = EBookmarkActions.AddBookmark;
  constructor(public payload: IBookmark) {}
}

export class RemoveBookmarkAction implements Action {
  public readonly type = EBookmarkActions.RemoveBookmark;
  constructor(public payload: number) {}
}

export type BookmarkActions = GetBookmarks | GetBookmarksSuccess | AddBookmarkAction | RemoveBookmarkAction;
