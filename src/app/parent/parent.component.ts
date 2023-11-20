import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  data:any;
  items = ['Angular','React']

  constructor(private myservice:ServiceService){}
  ngOnInit(): void {
    this.myservice.getData().subscribe(data=>{
      this.data = data;
    })
  }
  addData(value:any){
    this.items.push(value)
  }

}
