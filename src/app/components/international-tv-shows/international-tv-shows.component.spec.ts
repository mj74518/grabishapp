import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalTvShowsComponent } from './international-tv-shows.component';

describe('InternationalTvShowsComponent', () => {
  let component: InternationalTvShowsComponent;
  let fixture: ComponentFixture<InternationalTvShowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalTvShowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalTvShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
