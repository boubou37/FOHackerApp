import { Component, OnInit } from '@angular/core';
import {SolverService} from "../solver/solver.service";

@Component({
  selector: 'app-lazymode',
  templateUrl: './lazymode.component.html',
  styleUrls: ['./lazymode.component.css'],
  providers: [SolverService]
})

export class LazymodeComponent implements OnInit {

  words: string[] = [];
  constructor(private solver: SolverService) { }

  ngOnInit() {
  }

}
