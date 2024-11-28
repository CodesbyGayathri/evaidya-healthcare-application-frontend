import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PatientComponent } from './Patient/patient/patient.component';
import { DoctorComponent } from './Doctor/doctor/doctor.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { ViewProfileComponent } from './Patient/view-profile/view-profile.component';
import { MedicalChartComponent } from './Patient/medical-chart/medical-chart.component';
import { ViewAppointmentsComponent } from './Patient/view-appointments/view-appointments.component';
import { MyAppointmentsComponent } from './Patient/my-appointments/my-appointments.component';
import { AddDoctorComponent } from './Admin/add-doctor/add-doctor.component';
import { ManageDoctorsComponent } from './Admin/manage-doctors/manage-doctors.component';
import { ManagePatientComponent } from './Admin/manage-patient/manage-patient.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'viewprofile', component: ViewProfileComponent },
  { path: 'medicalchart', component: MedicalChartComponent },
  { path: 'viewappointments', component: ViewAppointmentsComponent},
  { path: 'patientappointments', component: MyAppointmentsComponent},
  { path: 'adddoctor', component: AddDoctorComponent},
  { path: 'managedoctor', component: ManageDoctorsComponent},
  { path: 'managepatient', component: ManagePatientComponent},
  { path: 'viewallappointments', component: ViewAppointmentsComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
