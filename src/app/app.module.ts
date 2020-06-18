import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { SelectGraphComponent } from './select-graph/select-graph.component';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { DifferenceComponent } from './difference/difference.component';
import { GroupingComponent } from './grouping/grouping.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SelectGraphComponent,
    SnapshotComponent,
    DifferenceComponent,
    GroupingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
