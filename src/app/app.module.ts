import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateStudent1Component } from './create-student1/create-student1.component';
import { Student1ListComponent } from './student1-list/student1-list.component';
import { UpdateStudent1Component } from './update-student1/update-student1.component';
import { Student1DetailsComponent } from './student1-details/student1-details.component';
import { FormsModule } from '@angular/forms';
import { ExamListComponent } from './exam-list/exam-list.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ExamDetailsComponent } from './exam-details/exam-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateStudent1Component,
    Student1ListComponent,
    UpdateStudent1Component,
    Student1DetailsComponent,
    ExamListComponent,
    CreateExamComponent,
    ExamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
