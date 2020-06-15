import { BookmarkActions } from "../actions/bookmark.actions";
import { IBookmarkState, initialBookmarkState } from "../state/bookmark.state";
import { EBookmarkActions } from "./../actions/bookmark.actions";

export const bookmarkReducers = (
  state = initialBookmarkState,
  action: BookmarkActions
): IBookmarkState => {
  switch (action.type) {
    case EBookmarkActions.GetBookmarksSuccess: {
      return {
        ...state,
        bookmarks: action.payload,
      };
    }
    case EBookmarkActions.AddBookmark: {
      return {
        ...state,
        bookmarks: [Object.assign({}, action.payload), ...state.bookmarks],
      };
    }
    case EBookmarkActions.RemoveBookmark: {
      return {
        ...state,
        bookmarks: state.bookmarks.filter(({ id }) => id !== action.payload),
      };
    }
    default:
      return state;
  }
};
