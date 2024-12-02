import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './Patient/patient/patient.component';
import { DoctorComponent } from './Doctor/doctor/doctor.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import { AuthInterceptor } from './auth.interceptor';
import { ViewProfileComponent } from './Patient/view-profile/view-profile.component';
import { MedicalChartComponent } from './Patient/medical-chart/medical-chart.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ViewAppointmentsComponent } from './Patient/view-appointments/view-appointments.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DoctorSlotModalComponent } from './Patient/doctor-slot-modal/doctor-slot-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MyAppointmentsComponent } from './Patient/my-appointments/my-appointments.component';
import { PrescriptionDialogComponent } from './Patient/prescription-dialog/prescription-dialog.component';
import { NoPrescriptionDialogComponent } from './Patient/no-prescription-dialog/no-prescription-dialog.component';
import { AddDoctorComponent } from './Admin/add-doctor/add-doctor.component';
import { ManageDoctorsComponent } from './Admin/manage-doctors/manage-doctors.component';
import { ManagePatientComponent } from './Admin/manage-patient/manage-patient.component';
import { ViewAllAppointmentsComponent } from './Admin/view-all-appointments/view-all-appointments.component';
import { MatLabel } from '@angular/material/form-field';
import { EmailComponent } from './email/email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ManageAppointmentsComponent } from './Doctor/manage-appointments/manage-appointments.component';
import { UpdateAppointmentStatusDialogComponent } from './update-appointment-status-dialog/update-appointment-status-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MedicationModalComponent } from '../app/Doctor/medication-modal/medication-modal.component';
import { MedicalChartDialogComponent } from './Doctor/medical-chart-dialog/medical-chart-dialog.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { DoctorAddedComponent } from './Doctor/doctor-added/doctor-added.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PatientComponent,
    DoctorComponent,
    AdminComponent,
    ViewProfileComponent,
    MedicalChartComponent,
    ViewAppointmentsComponent,
    DoctorSlotModalComponent,
    MyAppointmentsComponent,
    PrescriptionDialogComponent,
    NoPrescriptionDialogComponent,
    AddDoctorComponent,
    ManageDoctorsComponent,
    ManagePatientComponent,
    ViewAllAppointmentsComponent,
    EmailComponent,
    ResetPasswordComponent,
    ManageAppointmentsComponent,
    UpdateAppointmentStatusDialogComponent,
    MedicationModalComponent,
    MedicalChartDialogComponent,
    UpdatePasswordComponent,
    DoctorAddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatLabel,
    MatSelectModule


  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },*/
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
