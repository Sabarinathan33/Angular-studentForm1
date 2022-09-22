import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students = [];
  model = new Student();
  constructor(private studentService: StudentService) {}
  ngOnInit() {
    this.getAllStudents();
  }
  getAllStudents() {
    this.studentService.getAllStudentService().subscribe((x: any[]) => {
      this.students = x;
    });
  }
  editStudent(id) {
    this.studentService
      .getStudentService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteStudent(id: any) {
    this.studentService.deleteStudentService(id).subscribe((data) => {
      this.getAllStudents();
    });
  }
  addStudent() {
    alert(JSON.stringify(this.model));
    if (!this.model.id) {
      this.studentService.createStudentService(this.model).subscribe((data) => {
        this.getAllStudents();
        this.model = new Student();
      });
    } else {
      this.studentService
        .updateStudentService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllStudents();
          this.model = new Student();
        });
    }
  }
}
