import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGouvernoratComponent } from './edit-gouvernorat.component';

describe('EditGouvernoratComponent', () => {
  let component: EditGouvernoratComponent;
  let fixture: ComponentFixture<EditGouvernoratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGouvernoratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
