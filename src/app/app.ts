import { Component } from '@angular/core';
import { UsersComponent } from './users/users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent],
  template: `<app-users></app-users>`
})
export class AppComponent { }