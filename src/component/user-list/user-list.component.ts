import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: any[] = [];
  editingUserId: number | null = null;
  editedName: string = '';
  @Output() userUpdate= new EventEmitter<any>();


  editUser(user:any){
    this.editingUserId=user.id;
    this.editedName=user.name
  }
  cancel(){
    this.editingUserId=null;
    this.editedName=''
  }
  save(user:any){
    const updated = { ...user, name: this.editedName };
    this.userUpdate.emit(updated);
    this.editingUserId = null;
  }
}
