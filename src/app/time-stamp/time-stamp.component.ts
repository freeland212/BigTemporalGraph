import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit {


  @ViewChild('picker') picker: any;

  constructor() { }

  ngOnInit(): void {
  }

}
