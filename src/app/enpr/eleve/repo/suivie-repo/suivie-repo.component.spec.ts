import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuivieRepoComponent } from './suivie-repo.component';

describe('SuivieRepoComponent', () => {
  let component: SuivieRepoComponent;
  let fixture: ComponentFixture<SuivieRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuivieRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuivieRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
