import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export interface appointment{
    id: number,
    doctor: Doctor,
    patient: Patient,
    appointmentDate: string,
    appointmentTime: string,
    reasonForAppointment: string,
    status: string



}