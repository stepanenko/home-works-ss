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
  @Input() userAge: number;
}