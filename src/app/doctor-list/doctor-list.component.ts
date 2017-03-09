import { Component, OnInit } from "@angular/core";

import { DoctorService } from "../doctor.service";
import { Doctor } from "../model/doctor.model";

@Component({
  selector: "all-list",
  templateUrl: "./doctor-list.component.html",
})
export class DoctorListComponent implements OnInit {
  doctor: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.get()
      .then((doctor) => {
        this.doctor = doctor;
      });
  }
}
