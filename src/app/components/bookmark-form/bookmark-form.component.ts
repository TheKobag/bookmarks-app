import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { IBookmark } from "../../models/bookmark.interface";
import { IGroup } from "../../models/group.interface";
import { IFormState } from "../../store/state/form.state";
import { Action } from "@ngrx/store";
import { distinctUntilChanged } from "rxjs/operators";
import {
  formNameChanged,
  formUrlChanged,
  formGroupChanged,
} from "../../store/actions/form.actions";
import { IAppState } from "../../store/state/app.state";

@Component({
  selector: "app-bookmark-form",
  templateUrl: "./bookmark-form.component.html",
  styleUrls: ["./bookmark-form.component.scss"],
})
export class BookmarkFormComponent implements OnInit {
  @Input() groups: IGroup[];

  @Input() form: IFormState = {};
  @Output() actionsEmitted: EventEmitter<Action[]> = new EventEmitter();
  @Output() formSubmitted: EventEmitter<{}> = new EventEmitter();
  @Output() formCancelled: EventEmitter<{}> = new EventEmitter();

  bookmarkForm: FormGroup = new FormGroup({
    name: new FormControl(this.form.name, {
      updateOn: "blur",
      validators: [Validators.required],
    }),
    url: new FormControl(this.form.url, {
      updateOn: "blur",
      validators: [Validators.required],
    }),
    group: new FormControl(this.form.group, {
      validators: [Validators.required],
    }),
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookmarkForm.controls["name"].valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.actionsEmitted.emit([formNameChanged(value)]);
      });
    this.bookmarkForm.controls["url"].valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value) => {
        this.actionsEmitted.emit([formUrlChanged(value)]);
      });
    this.bookmarkForm.controls["group"].valueChanges
      .pipe(
        distinctUntilChanged(
          (x, y) => x === y || (x ? x.id : undefined) === (y ? y.id : undefined)
        )
      )
      .subscribe((value: IGroup) => {
        this.actionsEmitted.emit([formGroupChanged(value)]);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.form || changes.form.isFirstChange()) {
      return;
    }

    this.bookmarkForm.controls["name"].setValue(changes.form.currentValue.name);
    this.bookmarkForm.controls["url"].setValue(changes.form.currentValue.url);
    this.bookmarkForm.controls["group"].setValue(changes.form.currentValue.group);
  }

  onSubmit() {
    this.formSubmitted.next();
  }

  onCancel() {
    this.formCancelled.next();
  }
}
