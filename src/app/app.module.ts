import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './components/popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactivePopupComponent } from './components/reactive-popup/reactive-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './components/test/test.component';
import { FormComponent } from './components/form/form.component';
import { LoanCalComponent } from './components/loan-cal/loan-cal.component';
@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ReactivePopupComponent,
    TestComponent,
    FormComponent,
    LoanCalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
