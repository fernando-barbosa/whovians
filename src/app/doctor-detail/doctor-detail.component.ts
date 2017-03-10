import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DoctorService } from "../doctor.service";
import { Doctor } from '../model/doctor.model';

@Component({
  selector: 'app-doctor-detail',
  templateUrl: './doctor-detail.component.html'
})
export class DoctorDetailComponent implements OnInit {
  doctor = new Doctor();

  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.doctorService.get(id)
      .then((doctor) => { this.doctor = doctor; });
  }
}
