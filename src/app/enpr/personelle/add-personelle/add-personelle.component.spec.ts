import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonelleComponent } from './add-personelle.component';

describe('AddPersonelleComponent', () => {
  let component: AddPersonelleComponent;
  let fixture: ComponentFixture<AddPersonelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPersonelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPersonelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
