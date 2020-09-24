import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-other-shows',
  templateUrl: './other-shows.component.html',
  styleUrls: ['./other-shows.component.css']
})
export class OtherShowsComponent implements OnInit {

  showLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    this.service.getLSDataBT(6).subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      //console.log(this.data);
      // console.log(this.totalRecords);

    })
  }
}