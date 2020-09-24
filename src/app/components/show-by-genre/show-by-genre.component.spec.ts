import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowByGenreComponent } from './show-by-genre.component';

describe('ShowByGenreComponent', () => {
  let component: ShowByGenreComponent;
  let fixture: ComponentFixture<ShowByGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowByGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
