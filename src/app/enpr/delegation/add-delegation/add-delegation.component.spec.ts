import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelegationComponent } from './add-delegation.component';

describe('AddDelegationComponent', () => {
  let component: AddDelegationComponent;
  let fixture: ComponentFixture<AddDelegationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDelegationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelegationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
