import { Component,OnInit} from '@angular/core';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'test';
  users: any[] = [];
  constructor(private dataService: DataService) {}
  
  ngOnInit() {
  
      this.dataService.getData().subscribe(data => {
        this.users = data;
      }, error => {
        console.error('שגיאה בטעינת נתונים', error);
      });
    }

    onUserUpdate(updatedUser: any) {
      const idx = this.users.findIndex(u => u.id === updatedUser.id);
      if (idx !== -1) this.users[idx] = updatedUser;
    }
    
}
