import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  name: string = 'Todd';

  handleClick() {
    this.name = "Sergio"
  }
  handleInput(event: any) {
    this.name = event.target.value
  }
  handleBlur(event: any) {
    this.name = event.target.value
    console.log(event)
  }
  
}
