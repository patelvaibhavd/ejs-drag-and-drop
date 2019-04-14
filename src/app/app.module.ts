import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraganddropComponent } from './draganddrop/draganddrop.component';
import { GridModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-grids';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    DraganddropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [PageService, SelectionService, RowDDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
