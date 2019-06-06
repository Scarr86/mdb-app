import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  cap:number = 10;
  on:number = 9;
  wait:number = 3;
  res:number = 0  ;

  type:string = "button";

  constructor() { }

  ngOnInit() {
  }


  space($event) : void {
      this.res = this.cap - (this.on + this.wait); 
      console.log( this.res);
      this.res = (this.res >= 0) ? 0 : this.res * (-1);
      
  }

}
