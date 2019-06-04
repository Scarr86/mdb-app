import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent { 
   cap:number = 10;
  on:number = 9;
  wait:number = 3;
  res:number = 0  ;

  type:string = "button";

  space($event) : void {
      this.res = this.cap - (this.on + this.wait); 
      console.log( this.res);
      this.res = (this.res >= 0) ? 0 : this.res * (-1);
      
  }
}