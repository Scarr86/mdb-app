import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsstestComponent } from './csstest.component';

describe('CsstestComponent', () => {
  let component: CsstestComponent;
  let fixture: ComponentFixture<CsstestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsstestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsstestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
