import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolverComponent } from './solver.component';
import {SolverService} from "./solver.service";
import {HttpModule} from '@angular/http';

describe('SolverComponent', () => {
  let component: SolverComponent;
  let fixture: ComponentFixture<SolverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolverComponent ],
      imports: [HttpModule],
      providers: [SolverService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
