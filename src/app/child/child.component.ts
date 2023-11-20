import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() mydata:string = '';
    @Output() parentVar : EventEmitter<any> = new EventEmitter<any>();

    // childData:any = "Sending data to parent";
    
    sendToParent(value:any){
      console.log("Button pressed");
      this.parentVar.emit(value)
    }
}
