import { Injectable, Inject } from '@angular/core';
import { SnapshotRequest, TimeDimension, TemporalPredicate, DefaultService, TimeStamp, DifferenceRequest, Graph } from 'src/gen/generatedAngular';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(public defaultService:DefaultService) {

  }
  public snapshot(dbName:string,timeStamp:TimeStamp,timeDimension:TimeDimension):Promise<Graph> {

    let snapshotJson: SnapshotRequest = {
      timeDim: timeDimension,
      timeStamp:
      {
        predicate: timeStamp.predicate,
        startDate: timeStamp.startDate,
        endDate: timeStamp.endDate ?timeStamp.endDate: null
      },
      dbName: dbName
    }
    let result = this.defaultService.snapshot(snapshotJson);
    return result.toPromise();
  }

  public difference(dbName:string,from:TimeStamp,to:TimeStamp,timeDimension:TimeDimension) {

    let differenceJson: DifferenceRequest = {
      timeDim: timeDimension,
      from:
      {
        predicate: from.predicate,
        startDate: from.startDate,
        endDate: from.endDate ? from.endDate : null
      },
      to:
      {
        predicate: to.predicate,
        startDate: to.startDate,
        endDate: to.endDate ? to.endDate : null
      },
      dbName: dbName
    }
    return this.defaultService.difference(differenceJson).toPromise();
  }
}

