import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }


// api call for log in
  patientLog(pn:any,pass:any){
    const outputt={
      pn,
      pass
    }
    return this.api.post('',outputt)
  }

}
