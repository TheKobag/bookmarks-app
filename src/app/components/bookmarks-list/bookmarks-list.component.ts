import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IBookmark } from "src/app/models/bookmark.interface";
import { MatDialog } from "@angular/material/dialog";
import { BookmarkModalComponent } from "../bookmark-modal/bookmark-modal.component";
import { Store, select } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";
import { IFormState } from "src/app/store/state/form.state";
import { AddBookmarkAction, RemoveBookmarkAction } from "src/app/store/actions/bookmark.actions";

@Component({
  selector: "app-bookmarks-list",
  templateUrl: "./bookmarks-list.component.html",
  styleUrls: ["./bookmarks-list.component.scss"],
})
export class BookmarksListComponent implements OnInit {
  @Input() bookmarks: IBookmark[];
  @Output() removeBookmark: EventEmitter<IBookmark> = new EventEmitter();
  @Output() addBookmark: EventEmitter<IBookmark> = new EventEmitter();

  public formState: IFormState;

  constructor(
    private store: Store<IAppState>,
    public dialog: MatDialog) {
      this.store.pipe(select((e) => e.form)).subscribe((fs) => {
        this.formState = fs;
      });
    }

  ngOnInit(): void {}

  edit() {}

  openAddBookmarkDialog() {
    const dialogRef = this.dialog.open(BookmarkModalComponent, {
      width: "250px"
    });

    dialogRef.afterClosed().subscribe((result) => {
      const newBookmark: IBookmark = {
        id: this.bookmarks.length + 1,
        name: this.formState.name,
        url: this.formState.url,
        group: this.formState.group.name
      }

      this.addBookmark.next(newBookmark);
    });
  }

  remove(bookmark) {
    this.removeBookmark.next(bookmark);
  }
}
