import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtatcivilComponent } from './add-etatcivil.component';

describe('AddEtatcivilComponent', () => {
  let component: AddEtatcivilComponent;
  let fixture: ComponentFixture<AddEtatcivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEtatcivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtatcivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
