import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  @Input() users: User[];
  @Output() userSelect = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
