import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicaleComponent } from './add-medicale.component';

describe('AddMedicaleComponent', () => {
  let component: AddMedicaleComponent;
  let fixture: ComponentFixture<AddMedicaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
