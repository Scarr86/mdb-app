import { Component } from '@angular/core';
import { DataService} from './data.service';
import { Phone } from './phone';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]

})
export class AppComponent {
  name:string = 'myname';
  price:number = 44;
  items: Phone[] = [];
  constructor(private dataService: DataService){}

  addItem(name: string, price: number){
    this.dataService.addData(name, price);
  }
  ngOnInit(){
    this.items = this.dataService.getData();
  }
  
}