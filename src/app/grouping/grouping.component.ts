import { Component, AfterViewInit } from '@angular/core';
import { RestService } from '../rest.service';
import * as cytoscape from 'cytoscape';

@Component({
  selector: 'app-grouping',
  templateUrl: './grouping.component.html',
  styleUrls: ['./grouping.component.scss']
})
export class GroupingComponent implements AfterViewInit {

  //Currently entered DB Name
  public dbName: string;

  //Grouping Keys
  public groupingKeys: number[]=[];


  constructor(public restService: RestService) {
  }

  ngAfterViewInit(): void {
      //Init Cytoscape for Graph Drawing Stuff
  }

  addGroupingKey(){
    this.groupingKeys.push(0);
  }
  removeGroupingKey(){
    this.groupingKeys.pop();
  }


  /**
   * User presses Execute Button
   * Triggers Backend calls.
   */
  public async onExecute() {
    // TODO: Do Backend Stuff of Grouping 
  }
  /**
   * Change model when the user changes the db name in the according component
   * 
   * @param dbName 
   */
  public onDbNameChanged(dbName: string) {
    this.dbName = dbName;
    console.log(dbName);
  }
  public trackByIndex(index: number, obj: any): any {
    return index;
  }
}
