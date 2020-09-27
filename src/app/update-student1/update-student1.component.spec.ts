import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudent1Component } from './update-student1.component';

describe('UpdateStudent1Component', () => {
  let component: UpdateStudent1Component;
  let fixture: ComponentFixture<UpdateStudent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateStudent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
