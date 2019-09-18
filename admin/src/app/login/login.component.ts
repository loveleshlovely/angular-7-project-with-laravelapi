import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OuterServicesService } from '../outer-services.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    email:string = '';
    password:string = '';
    formSubmitted : boolean = false;
    constructor(
      public router: Router,
      private services : OuterServicesService,
    ) {}

    ngOnInit() {

        // if(localStorage.getItem('isLoggedin')) {
        //     this.router.navigate(['/dashboard']);
        // }
    }

    onLoggedin(e) {
        this.formSubmitted = true;
        e.preventDefault();

        this.services.loginApi(this.email , this.password).subscribe((data)=>{
            this.formSubmitted = false;
            this.email = '';
            this.password = '';

            console.log(data);
        });
        // localStorage.setItem('isLoggedin', 'true');

    }
}
