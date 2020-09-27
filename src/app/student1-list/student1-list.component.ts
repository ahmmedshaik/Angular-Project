import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { Student1 } from '../student1';
import { Student1Service } from '../student1.service';

@Component({
  selector: 'app-student1-list',
  templateUrl: './student1-list.component.html',
  styleUrls: ['./student1-list.component.css']
})
export class Student1ListComponent implements OnInit {

  student1s: Observable<Student1[]>;

  constructor(private student1Service: Student1Service,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.student1s = this.student1Service.getStudnetsList();
  }

  deleteStudent1(id: number) {
    this.student1Service.deleteStudent1(id)
     .subscribe(
       data => {
         console.log(data);
         this.reloadData();
       },
       error => console.error(error));
  }

  updateStudent1(id: number){
    this.router.navigate(['update', id]);
  }
}
