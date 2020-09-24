import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  movieLatest;
  movieRandom;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    this.service.getLData().subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      //console.log(this.data);
      // console.log(this.totalRecords);

    })
    this.service.getLatest().subscribe(
      res => {
        this.movieLatest = res;
        // console.log(this.totalRecords);
        //console.log(res);
      },
      err => {
        console.log(err);
      },
    );

    this.service.getLatest().subscribe(
      res => {
        this.movieRandom = res;
       
      },
      
      err => {
        console.log(err);
      },
    );
  }
}
