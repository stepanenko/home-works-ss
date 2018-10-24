import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { STUDENTS } from '../mock-students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = STUDENTS;

  selectedStudent: Student;
  onSelect(student: Student): void {
    this.selectedStudent = student;
  }

  // student: Student = {
  //   id: 1,
  //   name: 'Ken',
  //   surname: 'Wilber',
  //   phone: '+380971632212',
  //   birthdate: '23.06.74',
  //   address: 'New York',
  //   group: 'Holly',
  //   email: 'ken@wilber.com',
  //   password: 'kenw'
  // };


  constructor() {}

  ngOnInit() {}
}
