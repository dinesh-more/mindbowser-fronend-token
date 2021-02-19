import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empDetails: any = {};

  constructor(private dataService: DataServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmp(addEmpForm): void {
    this.dataService.postRequest(this.empDetails).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['home']);
      },
      err => {
        console.log('error in add employee');
      }
    );
  }

}
