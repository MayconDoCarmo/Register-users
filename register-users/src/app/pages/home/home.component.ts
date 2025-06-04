import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userName!: string | null;
  imgPerfil!: string;
  usersList!: any;
  lastUser!: User;

  constructor(private usersService: UserService) {}

  ngOnInit() {
    this.userName = sessionStorage.getItem('user');
    this.userName = this.userName
      ? this.userName.charAt(0).toUpperCase() +
        this.userName.slice(1).toLowerCase()
      : '';

    if (this.userName === 'Maycon') {
      this.imgPerfil = '../../../assets/img-perfil.jpg';
    } else {
      this.imgPerfil = '../../../assets/img-perfil-icon.jpg';
    }

    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (response: any) => {
        this.usersList = response;
        this.lastUser = this.usersList[this.usersList.length - 1];
        console.log(this.lastUser);
        console.log(this.usersList.length);
      },
    });
  }
}
