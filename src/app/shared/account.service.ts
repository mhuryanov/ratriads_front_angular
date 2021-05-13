import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from './appSettings';

// User interface
// export class MyInfo {
//   Username: string;
//   email: string;
//   old_password: string;
//   new_password: string;
//   new_password_confirmation: string;
// }

// export class ASetting{
//   check_direct: string;
//   check_html: string;
//   check_bulletin: string;
//   check_button: string;
// }

export class Uniq{
  unique_id : string;
}

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) { }

  GetUserData(value: object): Observable<any> {
    return this.http.post(AppSettings.backendURL+'api/account/GetUserData', value);
  }
  
  // User registration
   MyInfo(value: object , val:object): Observable<any> {
    return this.http.post(AppSettings.backendURL+'api/account/MyInfo', {value,val} );
  }

  // Login
  Settings(value: object , val:object): Observable<any> {
    return this.http.post<any>(AppSettings.backendURL+'api/account/Settings', {value,val});
  }

  // Login
  Privacy(value: object , val:object): Observable<any> {
    return this.http.post<any>(AppSettings.backendURL+'api/account/Privacy', {value,val});
  }
  //delete Account
  delete(val :object): Observable<any> {
    return this.http.post<any>(AppSettings.backendURL+'api/account/delete', val);
  }
  //get disk usage.
  getDiskUsage(requestPayload: object): Observable<any> {
    return this.http.post<any>(AppSettings.backendURL+'api/account/getDiskUsage', requestPayload);
  }
}
