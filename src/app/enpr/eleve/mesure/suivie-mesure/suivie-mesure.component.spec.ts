import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieMesureComponent } from './suivie-mesure.component';

describe('SuivieMesureComponent', () => {
  let component: SuivieMesureComponent;
  let fixture: ComponentFixture<SuivieMesureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivieMesureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
