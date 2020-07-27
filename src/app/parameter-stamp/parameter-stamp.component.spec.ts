import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterStampComponent } from './parameter-stamp.component';

describe('ParameterStampComponent', () => {
  let component: ParameterStampComponent;
  let fixture: ComponentFixture<ParameterStampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterStampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
