import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student1 } from '../student1';
import { Student1Service } from '../student1.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student1-details',
  templateUrl: './student1-details.component.html',
  styleUrls: ['./student1-details.component.css']
})
export class Student1DetailsComponent implements OnInit {

  id: number;
  student1: Student1;

  constructor(private route: ActivatedRoute,private router: Router,
    private student1Service: Student1Service) { }

  ngOnInit() {
    this.student1 = new Student1();

    this.id = this.route.snapshot.params['id'];

    this.student1Service.getStudent1(this.id)
      .subscribe(data => {
        console.log(data)
        this.student1 = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['students'])
  }

}
