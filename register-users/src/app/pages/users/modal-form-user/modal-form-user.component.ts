import { Component, Inject } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss',
})
export class ModalFormUserComponent {
  formUser!: FormGroup;
  editUser: boolean = false;

  saveUser() {
    let objUserForm = this.formUser.getRawValue();

    if (this.data && this.data.name) {
      this.userService.updateUser(this.data.id, objUserForm).subscribe({
        next: (response) => {
          window.alert('Usuário editado com sucesso!');
          console.log(this.data.id);
          this.closeModal();
        },
        error: (error) => {
          console.error('Erro ao editar usuário', error);
          window.alert('Erro ao editar usuário. Tente novamente.');
          console.log(objUserForm);
        },
      });
    } else {
      this.userService.createUser(objUserForm).subscribe({
        next: (response) => {
          window.alert('Usuário cadastrado com sucesso!');
          this.closeModal();
        },
        error: (error) => {
          console.error('Erro ao cadastrar usuário', error);
          window.alert('Erro ao cadastrar usuário. Tente novamente.');
        },
      });
    }
  }

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.buildForm();
    if (this.data && this.data.name) {
      this.editUser = true;
    }
  }

  buildForm() {
    this.formUser = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required, Validators.minLength(3)]],
      healthPlan: [false],
      dentalPlan: [false],
    });

    if (this.data && this.data.name) {
      this.fillForm();
    }
  }

  fillForm() {
    this.formUser.patchValue({
      id: this.data.id,
      name: this.data.name,
      email: this.data.email,
      sector: this.data.sector,
      role: this.data.role,
      healthPlan: this.data.healthPlan,
      dentalPlan: this.data.dentalPlan,
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
