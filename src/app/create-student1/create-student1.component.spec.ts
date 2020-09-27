import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudent1Component } from './create-student1.component';

describe('CreateStudent1Component', () => {
  let component: CreateStudent1Component;
  let fixture: ComponentFixture<CreateStudent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateStudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
