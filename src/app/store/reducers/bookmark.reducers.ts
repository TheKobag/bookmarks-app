import { EBookmarkActions } from "./../actions/bookmark.actions";
import { BookmarkActions } from "../actions/bookmark.actions";
import { initialBookmarkState, IBookmarkState } from "../state/bookmark.state";

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
