import { Component, OnInit } from '@angular/core';
import {SolverService} from '../solver/solver.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-lazymode',
  templateUrl: './lazymode.component.html',
  styleUrls: ['./lazymode.component.css'],
  providers: [SolverService]
})

export class LazymodeComponent implements OnInit {

  words: string[] = [];
  constructor(public solver: SolverService, private http: Http) { }

  ngOnInit() {
  }

}
