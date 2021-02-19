import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  empDetails: any = {};
  empForm: any = {};

  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getRequest().subscribe(data => {
      console.log(data);
      this.empDetails = data;
    },
      err => {
        console.log("error while geting employee details")
      }
    );
  }

  deleteEmployee(empid): void {
    this.dataService.deleteRequest(empid).subscribe(
      data => {
        alert('Employee '+empid+' Deleted')
        this.reloadPage();
      },
      err => {
        console.log('error in update employee')
      }
    );
  }

  onSubmit(): void {
    this.dataService.putRequest(this.empForm).subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log('error in update employee')
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
