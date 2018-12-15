import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
            <div>
                <div>
                <h2 *ngIf="false; else elseBlock"> Hello </h2>
                <ng-template #elseBlock>
                  <h2>Bye</h2>
                </ng-template> 
               </div>
                 <div *ngFor="let color of colors;index as i">
                  <h2>{{i}}{{color}}</h2>
                  </div> 
                  <h2>{{"hello " + name}}</h2>
                  <button (click) = "fireEvent()">Click It</button>
               </div>   
                `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childevent = new EventEmitter();
  public colors = ["red","blue","green"]
  constructor() { }
  
  ngOnInit() {
  }
  fireEvent(){
    this.childevent.emit("chal hatt")
  }

}
