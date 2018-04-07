import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  companyLogo = 'Widgets Inc.';
  pageTitle = 'Company Directory';
  filterControl;
  url = 'http://challenge-dev.starmarkcloud.com/users';
  userList;

  gridLayout = {
    cols: 1, 
    rows: 1, 
    color: '#fff'
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.url).subscribe(data => this.userList = data);
  }

}
