import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdministrationComponent } from './edit-administration.component';

describe('EditAdministrationComponent', () => {
  let component: EditAdministrationComponent;
  let fixture: ComponentFixture<EditAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
