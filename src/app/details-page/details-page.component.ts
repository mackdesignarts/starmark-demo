import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  pageTitle = "Employee Details";
  url = "http://challenge-dev.starmarkcloud.com/users/";
  user;

  constructor(private id: Number, private http: HttpClient) {
    id = 1;
   }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser (id) {
    this.http.get(this.url + this.id).subscribe(data => this.user = data);
  }

}
