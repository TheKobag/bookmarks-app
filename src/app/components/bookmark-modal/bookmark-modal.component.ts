import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IBookmark } from "src/app/models/bookmark.interface";
import { IFormState } from "src/app/store/state/form.state";
import { Store, select, Action } from "@ngrx/store";
import { IAppState } from "src/app/store/state/app.state";

@Component({
  selector: "app-bookmark-modal",
  templateUrl: "./bookmark-modal.component.html",
  styleUrls: ["./bookmark-modal.component.scss"],
})
export class BookmarkModalComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<{}> = new EventEmitter();
  bookmark: IBookmark;
  public formState: IFormState;

  constructor(
    public dialogRef: MatDialogRef<BookmarkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IBookmark,
    private store: Store<IAppState>
  ) {
    this.store.pipe(select((e) => e.form)).subscribe((fs) => {
      this.formState = fs;
    });
  }

  ngOnInit(): void {}

  onFormActions($event: Action[]) {
    const actions = $event;
    actions.forEach(this.store.dispatch.bind(this.store));
  }

  onFormSubmitted(): void {
    this.dialogRef.close();
  }

  onFormCancelled(): void {
    this.dialogRef.close();
  }
}
