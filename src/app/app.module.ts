import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import {  RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DeployComponent } from './deploy/deploy.component';
import { CsstestComponent } from './csstest/csstest.component';

//Определение маршрутов
const appRoutes = [
  {path:"test", component: TestComponent},
  {path:"carousel", component: CarouselComponent},
  {path:"csstest", component: CsstestComponent},
  {path:"deploy", component: DeployComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CarouselComponent,
    DeployComponent,
    CsstestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
