import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private api: ApiService, private router: Router, private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) {
    this.api.isLogin.next(false);
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx" + localStorage.getItem('UserName'));
    localStorage.setItem('UserName','');
    localStorage.removeItem('UserName');
    console.log(localStorage.getItem('UserName'));
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXxx" + localStorage.getItem('UserName'));

    this.http.post<string>(this.baseUrl + 'home/logout', {}).subscribe();

    
    this.router.navigate(['/']);
  }


}
