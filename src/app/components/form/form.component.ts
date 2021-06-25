import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ReactivePopupComponent } from '../reactive-popup/reactive-popup.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  fname = '';
  lname = '';
  gender = '';
  street = '';
  city = '';
  state = '';
  zip = '';
  submitted=false;

  constructor(public dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
  }

  Register(regForm: NgForm) {
    console.log(regForm);
    this.fname = regForm.value.firstname;
    this.lname = regForm.value.lastname;
    this.gender = regForm.value.gender;
    console.log(this.gender);
    regForm.reset();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '500px',
      data: { fname: this.fname, lname: this.lname, gender: this.gender }
    });

  }
  onSubmit() {
    this.submitted = true;
    //if (this.profileForm.invalid) {
     // return;
  //}
    console.log(this.profileForm.value);
    this.street = this.profileForm.value.street;
    this.city = this.profileForm.value.city;
    this.state = this.profileForm.value.state;
    this.zip = this.profileForm.value.zip;
  }

  profileForm = this.fb.group({
    street: [''],
    city: [''],
    state: [''],
    zip: ['']
  });

  get f() { return this.profileForm.controls; }

  openDialogForReactive() {

    const dialogRef = this.dialog.open(ReactivePopupComponent, {
      width: '500px',
      data: { street: this.street, city: this.city, state: this.state, zip: this.zip }
    });
  }
}