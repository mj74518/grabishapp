import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByGenreComponent } from './by-genre.component';

describe('ByGenreComponent', () => {
  let component: ByGenreComponent;
  let fixture: ComponentFixture<ByGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByGenreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
