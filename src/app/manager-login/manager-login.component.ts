import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-login',
  templateUrl: './manager-login.component.html',
  styleUrls: ['./manager-login.component.css']
})
export class ManagerLoginComponent implements OnInit {

  form: any = {};
  errorMessage = '';
  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home']);
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


}
