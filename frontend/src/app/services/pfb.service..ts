import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PfbService {

  constructor(private http: HttpClient) { }

  submit(payload: any) {
    return this.http.post('/api/submit_pfb', payload);
  }
}
