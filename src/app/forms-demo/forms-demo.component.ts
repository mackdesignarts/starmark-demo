import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})

export class FormsDemoComponent implements OnInit {
  pageTitle = 'Company Directory';
  filterControl;
  url = 'http://challenge-dev.starmarkcloud.com/users';
  userList: any = [];
  userGroup: any;

  gridLayout = {
    cols: 1, 
    rows: 1, 
    color: '#fff'
  };

  constructor(private http: HttpClient) { }
  
  converter(data) {
    for(let i=0; i<data.length; i++){
      this.userList.push(data[i]);
      this.userList[i].city = data[i].address.city;
      
    }
    console.log(this.userList);
  }
  
  groupUsers(data) {
	  
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.url).subscribe(data => this.converter(data));
  }

}
