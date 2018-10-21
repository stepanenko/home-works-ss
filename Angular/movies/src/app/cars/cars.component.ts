import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: 'cars.component.html',
  styleUrls: ['cars.component.css'] 
})
export class CarsComponent implements OnInit{
  cars;
  private url = 'https://carsnode.herokuapp.com/api/cars';

  constructor(private carsService: CarsService, private http: HttpClient) {}

  ngOnInit() {
    this.cars = this.carsService.getCars();
  }

  createPost(input: HTMLInputElement) {
    let car = {
      id: this.cars.length
    }
    this.http.post(this.url)
  }

}