import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  GetBookmarksSuccess,
  EBookmarkActions,
  GetBookmarks
} from '../actions/bookmark.actions';
import { BookmarkService } from '../../services/bookmark.service';
import { IBookmarkHttp } from '../../models/http-models/bookmark-http.interface';

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
