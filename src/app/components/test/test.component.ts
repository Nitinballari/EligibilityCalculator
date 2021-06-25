import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
 
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  SubmitForm(TempForm: NgForm){
  console.log(TempForm.value);
}
onSubmit(){
console.log(this.reactiveForm.value);
}
reactiveForm= this.fb.group({
  street: ['',Validators.required],
  city: ['',Validators.required],
  state: ['',Validators.required],
  zip: ['',[Validators.required,Validators.pattern("^[0-9]*$")]]
});

get street() {
  return this.reactiveForm.get('street');
}
get city() {
  return this.reactiveForm.get('city');
}
get state() {
  return this.reactiveForm.get('state');
}
get zip() {
  return this.reactiveForm.get('zip');
}


}
