import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpecialiteComponent } from './add-specialite.component';

describe('AddSpecialiteComponent', () => {
  let component: AddSpecialiteComponent;
  let fixture: ComponentFixture<AddSpecialiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpecialiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpecialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
