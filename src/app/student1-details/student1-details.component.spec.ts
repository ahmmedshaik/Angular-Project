import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Student1DetailsComponent } from './student1-details.component';

describe('Student1DetailsComponent', () => {
  let component: Student1DetailsComponent;
  let fixture: ComponentFixture<Student1DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Student1DetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Student1DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
