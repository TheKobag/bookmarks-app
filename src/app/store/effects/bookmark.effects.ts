import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IBookmarkHttp } from '../../models/http-models/bookmark-http.interface';
import { BookmarkService } from '../../services/bookmark.service';
import { EBookmarkActions, GetBookmarks, GetBookmarksSuccess } from '../actions/bookmark.actions';

@Injectable()
export class BookmarkEffects {
  @Effect()
  getBookmarks$ = this._actions$.pipe(
    ofType<GetBookmarks>(EBookmarkActions.GetBookmarks),
    switchMap(() => this._bookmarkService.getBookmarks()),
    switchMap((bookmarkHttp: IBookmarkHttp) => of(new GetBookmarksSuccess(bookmarkHttp.bookmarks)))
  );

  constructor(
    private _bookmarkService: BookmarkService,
    private _actions$: Actions  ) {}
}
