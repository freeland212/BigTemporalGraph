import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { TemporalPredicate, TimeStamp } from 'src/gen/generatedAngular';
import { NgxMatDatetimePicker } from '@angular-material-components/datetime-picker';



export interface PredicateSelectOpt{
  value:TemporalPredicate,
  endRequired:boolean
}

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements AfterViewInit {

  @ViewChild('startPicker') startPicker: NgxMatDatetimePicker<Date>;
  @ViewChild('endPicker') endPicker: NgxMatDatetimePicker<Date>;

  @Output("timeStamp") timeStampEvent = new EventEmitter<TimeStamp>();

  @Input("label") label:string;

  startDate: Date;
  endDate: Date;



  selectedPredicate:PredicateSelectOpt;
  predicates:PredicateSelectOpt[]=[];

  constructor() {
    let keys = Object.keys(TemporalPredicate);
    for (const key of keys) {
      if (key==TemporalPredicate.AsOf) {
        this.predicates.push(<PredicateSelectOpt>{value:key,endRequired:false}); 
      }
      else{
        this.predicates.push(<PredicateSelectOpt>{value:key,endRequired:true});   
      }
    }
  }

  ngAfterViewInit(): void {
    this.startPicker._selectedChanged.subscribe(()=>{
      this.startDate=this.startPicker._selected;
      this.publishChanges();
    });

    this.endPicker._selectedChanged.subscribe(()=>{
      this.endDate=this.endPicker._selected;
      this.publishChanges();
    });
  }

  publishChanges():void{
    this.timeStampEvent.emit(<TimeStamp>{predicate:this.selectedPredicate.value,startDate:this.startPicker._selected,endDate:this.endPicker?._selected});
  }
  

}
