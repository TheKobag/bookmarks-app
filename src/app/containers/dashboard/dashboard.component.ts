import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddBookmarkAction, GetBookmarks, RemoveBookmarkAction } from '../../store/actions/bookmark.actions';
import { selectBookmarkList } from '../../store/selectors/bookmark.selector';
import { IAppState } from '../../store/state/app.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bookmarks$ = this._store.pipe(select(selectBookmarkList));

  constructor(private _store: Store<IAppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetBookmarks());
  }

  addBookmark(newBookmark) {
    this._store.dispatch(new AddBookmarkAction(newBookmark));
  }

  removeBookmark(bookmark) {
    this._store.dispatch(new RemoveBookmarkAction(bookmark.id));
  }

}
