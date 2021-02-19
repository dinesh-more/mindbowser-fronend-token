import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empid;
  empDetails: any = {};

  constructor(private dataService: DataServiceService, private router: Router, private routerParams: ActivatedRoute) { }

  ngOnInit(): void {
    this.empid = this.routerParams.snapshot.params.empid;
    this.dataService.getRequestWithParam(this.routerParams.snapshot.params.empid).subscribe((result) => {
      console.log(result);
      this.empDetails = result;
    });
  }

  updateEmp(addEmpForm): void {
    this.dataService.putRequest(this.empDetails).subscribe(
      data => {
        console.log(data);
        alert('Employee '+ this.empDetails.empid +' Updated')
        this.router.navigate(['home']);
      },
      err => {
        console.log('error in update employee');
      }
    );
  }

}
