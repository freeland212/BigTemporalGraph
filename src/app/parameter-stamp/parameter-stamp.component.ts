import { Component, OnInit, ViewChild, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';


export interface PredicateSelectOpt{
  value:TemporalPredicate,
  endRequired:boolean
}

@Component({
  selector: 'app-parameter-stamp',
  templateUrl: './parameter-stamp.component.html',
  styleUrls: ['./parameter-stamp.component.scss']
})
export class ParameterStampComponent implements AfterViewInit {



  @Output("parameterStamp") ParameterStampEvent = new EventEmitter<ParameterStamp>();

  @Input("label") label:string;




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


  publishChanges():void{
    this.parameterStampEvent.emit(<ParameterStamp>{predicate:this.selectedPredicate.value});
  }
  

}
