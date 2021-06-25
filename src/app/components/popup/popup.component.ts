import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
fnameModal='';
lnameModal='';
genderModal='';
  constructor( public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
this.fnameModal=data.fname;
this.lnameModal=data.lname;
this.genderModal=data.gender;
     }

  ngOnInit(): void {
  }
 
  closeDialog() {
    this.dialogRef.close();
  }
}
