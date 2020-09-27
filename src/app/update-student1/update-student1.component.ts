import { Component, OnInit } from '@angular/core';
import { Student1 } from '../student1';
import { ActivatedRoute, Router } from '@angular/router';
import { Student1Service } from '../student1.service';
//import { error } from 'console';

@Component({
  selector: 'app-update-student1',
  templateUrl: './update-student1.component.html',
  styleUrls: ['./update-student1.component.css']
})
export class UpdateStudent1Component implements OnInit {
  
  id: number;
  student1: Student1;
  submitted = false;

  constructor(private route: ActivatedRoute,private router: Router,
    private student1Service: Student1Service) { }

  ngOnInit() {
    this.student1 = new Student1();

    this.id = this.route.snapshot.params['id'];

    this.student1Service.getStudent1(this.id)
     .subscribe(data =>{
       console.log(data);
       this.student1 = data;
     }, error => console.log(error));
  }

  updateStudent1(){
    this.submitted = false;
    this.student1Service.updateStudent1(this.student1)
      .subscribe(data => {
        console.log(data);
        this.student1 = new Student1();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(){
    this.submitted = true;
    this.updateStudent1();
  }
  
  gotoList(){
    this.router.navigate(['/students']);
  }
}
