import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDelegationComponent } from './edit-delegation.component';

describe('EditDelegationComponent', () => {
  let component: EditDelegationComponent;
  let fixture: ComponentFixture<EditDelegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDelegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
