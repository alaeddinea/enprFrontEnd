import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRegimeComponent } from './add-regime.component';

describe('AddRegimeComponent', () => {
  let component: AddRegimeComponent;
  let fixture: ComponentFixture<AddRegimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRegimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
