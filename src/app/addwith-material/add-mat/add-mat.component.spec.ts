import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatComponent } from './add-mat.component';

describe('AddMatComponent', () => {
  let component: AddMatComponent;
  let fixture: ComponentFixture<AddMatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
