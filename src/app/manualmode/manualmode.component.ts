import { Component, OnInit } from '@angular/core';
import {SolverService} from "../solver/solver.service";

@Component({
  selector: 'app-manualmode',
  templateUrl: './manualmode.component.html',
  styleUrls: ['./manualmode.component.css'],
  providers: [SolverService]
})
export class ManualmodeComponent implements OnInit {

  words: string[] = [''];
  constructor(private solver: SolverService) { }

  ngOnInit() {
  }

}
