import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-graph',
  templateUrl: './select-graph.component.html',
  styleUrls: ['./select-graph.component.scss']
})
export class SelectGraphComponent implements OnInit {

  public graphs: string[];
  constructor() {
    this.graphs = ["Graph1","Graph2"];
   }

  ngOnInit(): void {
  }

}
