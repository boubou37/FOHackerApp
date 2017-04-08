import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazymodeComponent } from './lazymode.component';
import {HttpModule} from '@angular/http';

describe('LazymodeComponent', () => {
  let component: LazymodeComponent;
  let fixture: ComponentFixture<LazymodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
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
