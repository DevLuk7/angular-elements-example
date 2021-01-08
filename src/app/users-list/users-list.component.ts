import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  list: User[];

  @Input()
  set userslist(userslist: User[]|string) {
    if (typeof userslist === 'string') {
      try {
        this.list = JSON.parse(userslist);
      } catch {}
    } else if (Array.isArray(userslist)) {
      this.list = userslist;
    }
  }

  @Output() userselect = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

}
