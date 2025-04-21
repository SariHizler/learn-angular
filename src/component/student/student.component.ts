import { Component } from '@angular/core';
import { DataService } from '../../services/data.service'; 


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  firstName: string = '';
  lastName='';
  users: any[] = [];


clickMe(): void {
  alert(this.firstName);

}

constructor(private dataService: DataService) {}

loadUsers() {
  this.dataService.getData().subscribe(data => {
    this.users = data;
  }, error => {
    console.error('שגיאה בטעינת נתונים', error);
  });
}

}