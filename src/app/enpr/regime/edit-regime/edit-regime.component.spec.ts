import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRegimeComponent } from './edit-regime.component';

describe('EditRegimeComponent', () => {
  let component: EditRegimeComponent;
  let fixture: ComponentFixture<EditRegimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRegimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
