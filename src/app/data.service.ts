import { Injectable } from '@angular/core';
import {Phone} from './phone';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: Phone[] = [
    {name:"Apple iPhone 7", price: 5600},
    {name:"HP Elite x3", price:4500},
    {name:"Alcatel S4", price:2500}
  ];
  constructor() { }

  getData():Phone[]{
    return this.data;
  }
  addData(name:string, price: number){
    this.data.push(new Phone(name, price));
  }
}
