import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from '../services/user';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class UsersComponent implements OnInit {
  users = signal<User[]>([]);
  loading = signal(true);
  errorMessage = signal('');

  constructor(private userService: UserService) {
    console.log('UsersComponent creado');
  }

  ngOnInit() {
    console.log('ngOnInit ejecutado');
    this.loadUsers();
  }

  loadUsers() {
    this.loading.set(true);
    this.errorMessage.set('');
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.log('Datos recibidos:', data);
        this.users.set(data);
        this.loading.set(false);
      },
      error: (err: Error) => {
        console.log('Error:', err.message);
        this.errorMessage.set(err.message);
        this.loading.set(false);
      }
    });
  }
}