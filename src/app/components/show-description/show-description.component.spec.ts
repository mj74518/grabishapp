import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDescriptionComponent } from './show-description.component';

describe('ShowDescriptionComponent', () => {
  let component: ShowDescriptionComponent;
  let fixture: ComponentFixture<ShowDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
