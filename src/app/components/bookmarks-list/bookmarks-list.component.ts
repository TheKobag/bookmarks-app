import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { IBookmark } from "../../models/bookmark.interface";
import { IGroup } from "../../models/group.interface";
import { MatDialog } from "@angular/material/dialog";
import { BookmarkModalComponent } from "../bookmark-modal/bookmark-modal.component";
import { Store, select } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";
import { IFormState } from "../../store/state/form.state";
import { AddBookmarkAction, RemoveBookmarkAction } from "../../store/actions/bookmark.actions";

@Component({
  selector: "app-bookmarks-list",
  templateUrl: "./bookmarks-list.component.html",
  styleUrls: ["./bookmarks-list.component.scss"],
})
export class BookmarksListComponent implements OnInit {
  @Input() bookmarks: IBookmark[];
  @Output() removeBookmark: EventEmitter<IBookmark> = new EventEmitter();
  @Output() addBookmark: EventEmitter<IBookmark> = new EventEmitter();
  groups: IGroup[] = [];
  newGroup: string;

  public formState: IFormState;

  constructor(
    private store: Store<IAppState>,
    public dialog: MatDialog) {
      this.store.pipe(select((e) => e.form)).subscribe((fs) => {
        this.formState = fs;
      });

    this.groups = [
      { id: "work", name: "Work" },
      { id: "personal", name: "Personal" },
    ];
    }

  ngOnInit(): void {}

  edit() {}

  openAddBookmarkDialog() {
    const dialogRef = this.dialog.open(BookmarkModalComponent, {
      width: "250px",
      data: this.groups
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

addGroup() {
  this.groups.push({id: this.newGroup, name: this.newGroup});
  this.newGroup = null;
}
  remove(bookmark) {
    this.removeBookmark.next(bookmark);
  }
}
