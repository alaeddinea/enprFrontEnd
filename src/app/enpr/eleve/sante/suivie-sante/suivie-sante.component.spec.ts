import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieSanteComponent } from './suivie-sante.component';

describe('SuivieSanteComponent', () => {
  let component: SuivieSanteComponent;
  let fixture: ComponentFixture<SuivieSanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivieSanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
