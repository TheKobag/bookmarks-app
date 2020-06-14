import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectBookmarkList } from 'src/app/store/selectors/bookmark.selector';
import { IAppState } from 'src/app/store/state/app.state';
import { GetBookmarks, RemoveBookmarkAction, AddBookmarkAction } from 'src/app/store/actions/bookmark.actions';

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

  addBookmark(newBookmark, id) {
    this._store.dispatch(new AddBookmarkAction(newBookmark));
  }

  removeBookmark(bookmark) {
    this._store.dispatch(new RemoveBookmarkAction(bookmark.id));
  }

}
