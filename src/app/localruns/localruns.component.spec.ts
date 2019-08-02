import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalrunsComponent } from './localruns.component';

describe('LocalrunsComponent', () => {
  let component: LocalrunsComponent;
  let fixture: ComponentFixture<LocalrunsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalrunsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalrunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
