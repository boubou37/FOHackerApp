import { Component, OnInit } from '@angular/core';
import {SolverService} from "./solver.service";
@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {

  constructor(public solverService: SolverService) { }

  ngOnInit() {
  }

}
