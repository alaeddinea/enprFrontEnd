import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMedicaleComponent } from './edit-medicale.component';

describe('EditMedicaleComponent', () => {
  let component: EditMedicaleComponent;
  let fixture: ComponentFixture<EditMedicaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMedicaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMedicaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
