import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testsetmatrix2Component } from './testsetmatrix2.component';

describe('Testsetmatrix2Component', () => {
  let component: Testsetmatrix2Component;
  let fixture: ComponentFixture<Testsetmatrix2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testsetmatrix2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testsetmatrix2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
