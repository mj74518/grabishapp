import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodMoviesComponent } from './hollywood-movies.component';

describe('HollywoodMoviesComponent', () => {
  let component: HollywoodMoviesComponent;
  let fixture: ComponentFixture<HollywoodMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollywoodMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollywoodMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
