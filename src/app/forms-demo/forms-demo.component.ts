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
  userGroup: any = [];

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
    this.userList.sort(this.sortArr('lastName'));
    this.groupUsers(this.userList);
  }

  sortArr(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }
  
  groupUsers(data) {
	  for(let i=0; i<data.length; i++){
      if(!this.userGroup.includes(data[i].lastName.substring(0,1))){
        this.userGroup.push(data[i].lastName.substring(0,1));
      }
    }
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get(this.url).subscribe(data => this.converter(data));
  }

}
