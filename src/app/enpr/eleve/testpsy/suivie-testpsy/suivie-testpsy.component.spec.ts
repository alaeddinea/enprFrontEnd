import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieTestpsyComponent } from './suivie-testpsy.component';

describe('SuivieTestpsyComponent', () => {
  let component: SuivieTestpsyComponent;
  let fixture: ComponentFixture<SuivieTestpsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivieTestpsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieTestpsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
