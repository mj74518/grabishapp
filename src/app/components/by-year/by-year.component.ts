import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-by-year',
  templateUrl: './by-year.component.html',
  styleUrls: ['./by-year.component.css']
})
export class ByYearComponent implements OnInit {

  movieLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
    const year = this.route.snapshot.paramMap.get('year');
  
    if(year.length>4){
        var yearfound = year.split("-", 2);
        const year1 = yearfound[0];
        const year2 = yearfound[1];
        this.service.getLDataBYR(year1,year2).subscribe((data) =>{
          this.data = data;
          this.totalRecords=data.length;
        })
    }
    else{
      const year1 = year;

      this.service.getLDataBY(year).subscribe((data) =>{
        this.data = data;
        this.totalRecords=data.length;
      })
    }
  }

}
