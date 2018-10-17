import { Input, Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `
      <ng-content></ng-content>
      <h4>User name: {{userName}}!</h4>,
      <p>User age: {{userAge}}!<p>`,
    styles: [`h4, p {color:red;}`]
})
export class ChildComponent { 
  @Input() userName: string;
  _userAge: number;

  @Input() 
  set userAge(age:number) {
    if (age < 0)
      this._userAge = 0;
  }
}