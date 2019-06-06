import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TestComponent } from './test/test.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ExampleComponent } from './example/example.component';
import { DeployComponent } from './deploy/deploy.component';

//Определение маршрутов
const appRoutes = [
  
  {path:"test", component: TestComponent},
  {path:"carousel", component: CarouselComponent},
  {path:"example", component: ExampleComponent},
  {path:"deploy", component: DeployComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CarouselComponent,
    ExampleComponent,
    DeployComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
