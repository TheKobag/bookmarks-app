import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkModalComponent } from './bookmark-modal.component';

describe('BookmarkModalComponent', () => {
  let component: BookmarkModalComponent;
  let fixture: ComponentFixture<BookmarkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
