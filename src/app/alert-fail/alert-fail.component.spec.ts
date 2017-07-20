import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFailComponent } from './alert-fail.component';

describe('AlertFailComponent', () => {
  let component: AlertFailComponent;
  let fixture: ComponentFixture<AlertFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
