import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymodeComponent } from './lazymode.component';

describe('LazymodeComponent', () => {
  let component: LazymodeComponent;
  let fixture: ComponentFixture<LazymodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazymodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
