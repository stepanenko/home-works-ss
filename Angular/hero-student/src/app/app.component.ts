import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Students App';

  constructor(private http: HttpClient) {
  }

  students: string [];

  ngOnInit () {
    this.http.get('./assets/students.json')
      .subscribe(data => {
        this.students = data as string[];
          console.log(this.students);
      });
  }
}
