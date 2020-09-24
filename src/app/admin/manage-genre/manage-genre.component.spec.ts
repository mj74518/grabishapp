import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGenreComponent } from './manage-genre.component';

describe('ManageGenreComponent', () => {
  let component: ManageGenreComponent;
  let fixture: ComponentFixture<ManageGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
