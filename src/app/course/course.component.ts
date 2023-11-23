import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { courses } from './course-data';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  searchText: string = '';

  constructor() {}

  ngOnInit() {
    this.courses = courses;
    this.filteredCourses = this.courses;
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
