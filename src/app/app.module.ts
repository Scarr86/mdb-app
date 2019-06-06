import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TestComponent } from './test/test.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ExampleComponent } from './example/example.component';
import { DeployComponent } from './deploy/deploy.component';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
