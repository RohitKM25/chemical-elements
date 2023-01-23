import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ElementDetailedViewComponent } from './element-detailed-view/element-detailed-view.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PeriodicTableComponent } from './periodic-table/periodic-table.component';
import { PeriodicTableElementComponent } from './periodic-table-element/periodic-table-element.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ElementDetailedViewComponent, PeriodicTableComponent, PeriodicTableElementComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'elements/:elementName',
        component: ElementDetailedViewComponent,
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
