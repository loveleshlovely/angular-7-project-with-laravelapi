import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OuterServicesService {

  base_url = environment.apiUrl;
  constructor(
      private http : HttpClient

  ) { }

  loginApi(email , password)
  {

    const data = {

        'userid' : email,
        'password' : password,
    };

    console.log(data);


    return this.http.post(this.base_url+'oauth/token', data);

    // let url = this.base_url+'oauth/token';


  }

}
