import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalrunreportComponent } from './localrunreport.component';

describe('LocalrunreportComponent', () => {
  let component: LocalrunreportComponent;
  let fixture: ComponentFixture<LocalrunreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalrunreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalrunreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
