import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdministrationComponent } from './add-administration.component';

describe('AddAdministrationComponent', () => {
  let component: AddAdministrationComponent;
  let fixture: ComponentFixture<AddAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
