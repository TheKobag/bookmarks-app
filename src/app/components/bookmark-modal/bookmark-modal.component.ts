import { Component, OnInit, Inject, Output, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IBookmark } from "../../models/bookmark.interface";
import { IGroup } from "../../models/group.interface";
import { IFormState } from "../../store/state/form.state";
import { Store, select, Action } from "@ngrx/store";
import { IAppState } from "../../store/state/app.state";

@Component({
  selector: "app-bookmark-modal",
  templateUrl: "./bookmark-modal.component.html",
  styleUrls: ["./bookmark-modal.component.scss"],
})
export class BookmarkModalComponent implements OnInit {
  @Output() formSubmitted: EventEmitter<{}> = new EventEmitter();
  groups: IGroup[] = [];
  public formState: IFormState;

  constructor(
    public dialogRef: MatDialogRef<BookmarkModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IGroup[],
    private store: Store<IAppState>
  ) {
    this.store.pipe(select((e) => e.form)).subscribe((fs) => {
      this.formState = fs;
    });
  }

  ngOnInit(): void {
    console.log(this.data)
    this.groups = this.data;
  }

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
