import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-csstest',
  templateUrl: './csstest.component.html',
  styleUrls: ['./csstest.component.scss']
})
export class CsstestComponent implements OnInit {
  rowdiv:number[] = [1,2,3];
  coldiv:number[] = [1,2,3,4];
  name:string ;
  price:number ;
  items: Phone[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
  addItem(name: string, price: number){
    this.dataService.addData(name, price);
  }
  delItem(){
    this.dataService.delData();
  }

}
