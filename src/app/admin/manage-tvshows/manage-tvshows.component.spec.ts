import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTvshowsComponent } from './manage-tvshows.component';

describe('ManageTvshowsComponent', () => {
  let component: ManageTvshowsComponent;
  let fixture: ComponentFixture<ManageTvshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTvshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTvshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
