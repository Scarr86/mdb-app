import { Component, OnInit } from '@angular/core';
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  names:Array<string>; 
  
  cap:number = 10;
  on:number = 9;
  wait:number = 3;
  res:number = 0  ;

  type:string = "button";
  constructor() { }

  ngOnInit() {
    this.names = ["tom", "bob", "alice"];
    console.log(this.names[1]);
    let arr:number[] = [10,20,30];
    arr.forEach(element => {
      console.log(element);
    });
    console.log("resul: "+this.sum(arr, 0));

    arr.forEach(element => {
      console.log(element);
    });
  }

  space($event) : void {
    let sum:number;
    sum = this.on  +this.wait;
    console.log( "sum =" + sum);
    console.log( "on + wait =" + this.on + this.wait);
      this.res = this.cap - (this.on + this.wait); 
      console.log( this.res);
      this.res = (this.res >= 0) ? 0 : this.res * (-1);
      
  }

  sum(arr:number[], ind:number):number{
    if(ind >  arr.length - 1) {
      return 0;
    }
    else {
      return arr[ind] + this.sum(arr, ++ind);
    } 
  }

}
