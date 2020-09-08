import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    const el = document.createElement('users-list') as any;
    el.users = [{name: 'John'}, {name: 'IronMan'}];
    el.addEventListener('userSelect', e => console.log(e.detail));
    document.querySelector('#users-container').appendChild(el);
  }

}
