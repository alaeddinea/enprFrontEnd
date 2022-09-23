import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPersonelleComponent } from './edit-personelle.component';

describe('EditPersonelleComponent', () => {
  let component: EditPersonelleComponent;
  let fixture: ComponentFixture<EditPersonelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPersonelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
