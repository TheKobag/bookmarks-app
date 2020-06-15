import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IBookmarkHttp } from '../models/http-models/bookmark-http.interface';
import { IAppState } from '../store/state/app.state';


const nextId = ((id = 0) => () => ++id)()

@Injectable()
export class BookmarkService {
  bookmarksUrl = `${environment.apiUrl}bookmarks.json`;

  constructor(private _http: HttpClient,
    private store: Store<IAppState>,) { }

  getBookmarks(): Observable<IBookmarkHttp> {
    return this._http.get<IBookmarkHttp>(this.bookmarksUrl);
  }

}
