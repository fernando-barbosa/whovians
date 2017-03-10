import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import "rxjs/add/operator/toPromise";

import { Doctor } from './model/doctor.model';

@Injectable()
export class DoctorService {

  constructor(private http: Http) { }

  list() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.get("https://private-ebb9c-whovians.apiary-mock.com/list", {
      headers: headers
    })
    .toPromise()
    .then((res: Response) => {
      let data = res.json();
      let alldoctor = [];

      data.doctor_entries.forEach((entry) => {
        let doctor = new Doctor();
        doctor.name = entry.doctor_info.name;
        doctor.id = entry.entry_number;

        alldoctor.push(doctor);
      });

      return alldoctor;
    })
    .catch(this.handleError);
  }

  get(id: number) {
      let headers = new Headers();
      headers.append("Content-Type", "application/json");

      return this.http.get("https://private-ebb9c-whovians.apiary-mock.com/" + id, {
          headers: headers
      })
      .toPromise()
      .then((res: Response) => {
        let data = res.json();
        let doctor = new Doctor();
        doctor.name = data.doctor_info.name;
        doctor.id = data.entry_number;
        doctor.actor = data.doctor_info.actor;
        doctor.appearance = data.doctor_info.first_appearance;
        
        data.doctor_info.companions.forEach((eachCompanion) => {
            doctor.companions.push({
              name: eachCompanion.name
            });
        });

        return doctor;
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || "";
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

}
