import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-demo',
  templateUrl: './forms-demo.component.html',
  styleUrls: ['./forms-demo.component.css']
})
export class FormsDemoComponent implements OnInit {
  companyLogo = 'Widgets Inc.';
  pageTitle = 'Company Directory';
  filterControl;

  // User data
  users = [
    {
      "id": 0,
      "firstName": "Dejuan",
      "lastName": "Hessel",
      "dob": "1971-12-12T23:21:55.027Z",
      "address": {
        "street": "36948 Daugherty Crescent",
        "city": "North Baileeborough",
        "state": "LA",
        "zip": "57539-9128"
    },
      "phone": "812-157-1264",
      "username": "Dejuan_Hessel39",
      "password": "Adc_4PxXBjC6FTf",
      "email": "Dejuan62@hotmail.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg",
      "tags": []
    },
    {
      "id": 1,
      "firstName": "Turner",
      "lastName": "Jerde",
      "dob": "1988-09-20T17:13:36.163Z",
      "address": {
        "street": "53784 Irwin Cape",
        "city": "West Glennie",
        "state": "NV",
        "zip": "75968"
    },
      "phone": "770-618-1133",
      "username": "Turner67",
      "password": "MsFDTRcmCrV97zq",
      "email": "Turner31@yahoo.com",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/geneseleznev/128.jpg",
      "tags": [
        "back-end"
      ]
    },
    {
      "id": 2,
      "firstName": "Kendall",
      "lastName": "Stanton",
      "dob": "1979-07-02T01:26:43.830Z",
      "address": {
        "street": "96863 Gottlieb Knolls",
        "city": "North Francomouth",
        "state": "NV",
        "zip": "08250-6497"
    },
      "phone": "1-200-675-0801",
      "username": "Kendall.Stanton",
      "password": "hwCgAr2UiP63ShP",
      "email": "",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mikaeljorhult/128.jpg",
      "tags": [
        "digital",
        "primary"
      ]
    },
    {
      "id": 2,
      "firstName": "Kendall",
      "lastName": "Stanton",
      "dob": "1979-07-02T01:26:43.830Z",
      "address": {
        "street": "96863 Gottlieb Knolls",
        "city": "North Francomouth",
        "state": "NV",
        "zip": "08250-6497"
    },
      "phone": "1-200-675-0801",
      "username": "Kendall.Stanton",
      "password": "hwCgAr2UiP63ShP",
      "email": "",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mikaeljorhult/128.jpg",
      "tags": [
        "digital",
        "primary"
      ]
    },
    {
      "id": 2,
      "firstName": "Kendall",
      "lastName": "Stanton",
      "dob": "1979-07-02T01:26:43.830Z",
      "address": {
        "street": "96863 Gottlieb Knolls",
        "city": "North Francomouth",
        "state": "NV",
        "zip": "08250-6497"
    },
      "phone": "1-200-675-0801",
      "username": "Kendall.Stanton",
      "password": "hwCgAr2UiP63ShP",
      "email": "",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mikaeljorhult/128.jpg",
      "tags": [
        "digital",
        "primary"
      ]
    }
  ];

  gridLayout = {
    cols: 1, 
    rows: 1, 
    color: '#fff'
  };

  constructor() { }

  ngOnInit() {
  }

}
