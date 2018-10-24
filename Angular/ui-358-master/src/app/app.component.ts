import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private httpService: HttpClient) {}

  students: string [];

  ngOnInit () {
    this.httpService.get('./assets/students.json')
      .subscribe(data => {
        this.students = data as string[];
          console.log(this.students);
      });
  }
}
