import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <table>
    <tr>
      <th>Display column 1</th>
      <th>Display column 2</th>
    </tr>
    <tr>
      <td width="50%">
        <h2>Welcome {{2+2}}</h2>
        <h2 class="text-success">{{"welcome " + name }} {{name.length}}</h2>
        <h2 [class]="successClass">{{name.toUpperCase()}}</h2>
        <h2 class=".text-special" [class]="successClass" c>{{greetUser()}}</h2>
        <!--<h2>{{siteUrl}}</h2>-->
        <input [id]="myId" type="test" value="Bla">
        <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="Bla">
        <h2 [class.text-danger]="hasError">{{"welcome " + name }}</h2>
        <h2 [ngClass]="messageClasses">BlaEvolution</h2>
        <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
        <h2 [style.color]="highlightColor">Style Binding 2</h2>
        <h2 [ngStyle]="titleStyles">Style Binding 3</h2>
        <button (click)="testClick($event)">Greet</button>
        <button (click)="greeting='Welcome Bla'">Greet2</button>
        {{greeting}}  {{time}}
        <input #myInput type="text">
        <button (click)="logMessage(myInput.value)">Log</button>
        <h2><input [(ngModel)]="name2" type="text">
        <button (click)="onClick($clear)">Clear</button>{{name2}}</h2>
        <h2 *ngIf="displayName; then thenBlock; else elseBlock"></h2>
        <button (click)="onClickHide($hide)">Hide</button>
        <ng-template #thenBlock>
        <h2>HideMe!!</h2>
        </ng-template>
        <ng-template #elseBlock>
        <h2>You hid me!</h2>
        </ng-template>
        <h2>{{date}}</h2>
        <h2>{{date | date:'short'}}</h2>
        <h2>{{date | date:'long'}}</h2>
        <h2>{{date | date:'shortDate'}}</h2>
        <h2>{{date | date:'shortTime'}}</h2>
      </td>
      <td width="50%">
        <div [ngSwitch]="color">
          <div *ngSwitchCase="'red'">You picked red</div>
          <div *ngSwitchCase="'blue'">You picked blue</div>
          <div *ngSwitchCase="'green'">You picked green</div>
          <div *ngSwitchDefault>Pick again</div>
        </div>
        <div *ngFor="let color of colors; index as i; even as e">
          <h2>{{i}}. {{color}} {{e}}</h2>
        </div>
        <h2>{{"Hello " + name3}}</h2>
        <button (click)="fireEvent()">Send Event</button>
        <h2>{{name}}</h2>
        <h2>{{name | lowercase}}</h2>
        <h2>{{name | uppercase}}</h2>
        <h2>{{message | titlecase}}</h2>
        <h2>{{name | slice:2:5}}</h2>
        <h2>{{person | json}}</h2>

        <h2>{{5.678 | number:'1.2-3'}}</h2>
        <h2>{{5.678 | number:'3.4-5'}}</h2>
        <h2>{{5.678 | number:'1.1-8'}}</h2>

        <h2>{{0.25 | percent}}  {{0.25 | currency}}</h2>
        <h2>{{0.25 | currency: 'GBP'}}  {{0.25 | currency: 'EUR'}}</h2>
      </td>
    </tr>
  </table>
  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "BlaBla";
  public name2 = "";
  displayName = true;
  public color = "red";
  public colors = ["red", "blue", "green", "yellow"];
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public greeting = "";
  public time = "";
  public welcomeMessage = "Welcome to Blaaaaa";
  public titleStyles = {
    color: "blue";
    fontStyle: "italic";
  }
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }
  @Input('parentData') public name3;
  @Output() public childEvent = new EventEmitter();
  public message = "Welcome to Blaaaa";
  public person = {
    "firstName": "John",
    "lastName": "Doe"
  };
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }
  testClick(event) {
    console.log(event);
    this.greeting = this.welcomeMessage;
    this.time = event.timeStamp;
  }
  onClickHide(hide){
    console.log(hide);
    this.displayName = false;
  }
  onClick(clear){
    this.name2 = "";
  }
  greetUser() {
  return "Hello " + this.name;
  }
  logMessage(value){
    console.log(value);
  }
  fireEvent(){
    this.childEvent.emit('Hey BlaBlaBla');
  }
}
