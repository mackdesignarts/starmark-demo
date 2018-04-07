import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParamMap, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})

export class DetailsPageComponent implements OnInit {
  pageTitle = "Employee Details";
  url = "http://challenge-dev.starmarkcloud.com/users/";
  user;
  id;
  param1; 
  param2;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.id = this.route.snapshot.params.id;
    });
    console.log(this.id)
  }

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser (id) {
    this.http.get(this.url + this.id).subscribe(data => this.user = data);
  }

}
