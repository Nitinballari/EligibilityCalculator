import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reactive-popup',
  templateUrl: './reactive-popup.component.html',
  styleUrls: ['./reactive-popup.component.scss']
})
export class ReactivePopupComponent implements OnInit {
  street:'';
  city= '';
  state: '';
  zip: '';
  
  constructor( public dialogRef: MatDialogRef<ReactivePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {
this.street=data.street;
this.city=data.city;
this.state=data.state;
this.zip=data.zip;
     }
    

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
