import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntsetupComponent } from './intsetup.component';

describe('IntsetupComponent', () => {
  let component: IntsetupComponent;
  let fixture: ComponentFixture<IntsetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntsetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
