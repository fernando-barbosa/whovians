import { Component, OnInit } from "@angular/core";

import { Doctor } from "./model/doctor.model";
import { DoctorService } from "./doctor-service";

@Component({
  selector: "all-list",
  templateUrl: "./doctor-list.component.html",
})
export class DoctorListComponent implements OnInit {
  doctor: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.list()
      .then((doctor) => {
        this.doctor = doctor;
      });
  }
}
