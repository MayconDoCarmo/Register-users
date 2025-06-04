import { Component, ViewChild } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, matSortAnimations } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModalViewUserComponent } from './modal-view-user/modal-view-user.component';
import { ModalFormUserComponent } from './modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'benefits',
    'action',
  ];
  dataSource: any;
  listUsers: User[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private usersService: UserService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<any>(this.listUsers);
  }

  ngOnInit() {
    this.getUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (response: any) => {
        this.listUsers = response;

        this.dataSource = new MatTableDataSource<any>(this.listUsers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = 'Itens por página';
      },
    });
  }

  deleteUser(user: number) {
    this.usersService.deleteUser(user).subscribe({
      next: (response) => {
        window.alert('Usuário apagado com sucesso!');
      },
      error: (error) => {
        console.log(user);
        console.error('Erro ao apagar usuário', error);
        window.alert('Erro ao apagar usuário. Tente novamente.');
      },
    });
    this.getUsers();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openModalViewUser(user: User) {
    this.dialog.open(ModalViewUserComponent, {
      width: '700px',
      height: '380px',
      data: user,
    });
  }

  openModalAddUser() {
    this.dialog
      .open(ModalFormUserComponent, {
        width: '700px',
        height: '400px',
      })
      .afterClosed()
      .subscribe(() => this.getUsers());
  }

  openModalEditUser(user: User) {
    this.dialog
      .open(ModalFormUserComponent, {
        width: '700px',
        height: '400px',
        data: user,
      })
      .afterClosed()
      .subscribe(() => this.getUsers());
  }
}
