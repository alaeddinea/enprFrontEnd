import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEtatcivilComponent } from './edit-etatcivil.component';

describe('EditEtatcivilComponent', () => {
  let component: EditEtatcivilComponent;
  let fixture: ComponentFixture<EditEtatcivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEtatcivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEtatcivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
