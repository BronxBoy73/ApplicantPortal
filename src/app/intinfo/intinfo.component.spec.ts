import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntinfoComponent } from './intinfo.component';

describe('IntinfoComponent', () => {
  let component: IntinfoComponent;
  let fixture: ComponentFixture<IntinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
