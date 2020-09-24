import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodMoviesComponent } from './bollywood-movies.component';

describe('BollywoodMoviesComponent', () => {
  let component: BollywoodMoviesComponent;
  let fixture: ComponentFixture<BollywoodMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BollywoodMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
