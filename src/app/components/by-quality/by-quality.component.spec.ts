import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByQualityComponent } from './by-quality.component';

describe('ByQualityComponent', () => {
  let component: ByQualityComponent;
  let fixture: ComponentFixture<ByQualityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByQualityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
