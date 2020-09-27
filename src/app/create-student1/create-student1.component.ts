import { Component, OnInit } from '@angular/core';
import { Student1 } from '../student1';
import { Student1Service } from '../student1.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student1',
  templateUrl: './create-student1.component.html',
  styleUrls: ['./create-student1.component.css']
})
export class CreateStudent1Component implements OnInit {

  student1: Student1 = new Student1();
  submitted = false;

  constructor(private student1Service: Student1Service,
    private router: Router) { }

  ngOnInit() {
  }

  newStudent1(): void{
    this.submitted = false;
    this.student1 = new Student1();
  }

  save(){
    this.student1Service
    .createStudent1(this.student1).subscribe(data =>{
      console.log(data)
      this.student1 = new Student1();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.save();
  }

  gotoList(){
    this.router.navigate(['/students']);
  }

}
