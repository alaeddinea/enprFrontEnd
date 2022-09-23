import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintEleveComponent } from './print-eleve.component';

describe('PrintEleveComponent', () => {
  let component: PrintEleveComponent;
  let fixture: ComponentFixture<PrintEleveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintEleveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintEleveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
