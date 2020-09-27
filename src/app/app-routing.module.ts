import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Student1ListComponent } from './student1-list/student1-list.component';
import { CreateStudent1Component } from './create-student1/create-student1.component';
import { UpdateStudent1Component } from './update-student1/update-student1.component';
import { Student1DetailsComponent } from './student1-details/student1-details.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { CreateExamComponent } from './create-exam/create-exam.component';

const routes: Routes = [
  { path: '', redirectTo: 'student1', pathMatch: 'full' },
  { path: 'students', component: Student1ListComponent },
  { path: 'add', component: CreateStudent1Component },
  { path: 'update/:id', component: UpdateStudent1Component },
  { path: 'details/:id', component: Student1DetailsComponent },
  { path: '', redirectTo: 'exam', pathMatch: 'full' },
  { path: 'exams', component: ExamListComponent },
  { path: 'addexam', component: CreateExamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
