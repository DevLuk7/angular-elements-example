import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  @Input() userslist: User[];
  @Output() userselect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (typeof this.userslist === 'string') {
      try {
        this.userslist = JSON.parse(this.userslist);
      } catch {}
    }
  }

}
