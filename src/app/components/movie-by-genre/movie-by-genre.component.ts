import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-movie-by-genre',
  templateUrl: './movie-by-genre.component.html',
  styleUrls: ['./movie-by-genre.component.css']
})
export class MovieByGenreComponent implements OnInit {

  movieLatest;
  searchText;
  data: Array<any>;
  totalRecords: string;
  page: number=1;
  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) {
    this.data = new Array<any>()
  }

  ngOnInit(): void {
   
    const genre = this.route.snapshot.paramMap.get('genre');
    //console.log(genre);
    this.service.getLDataBG(genre).subscribe((data) =>{
      
      this.data = data;
      this.totalRecords=data.length;
      //console.log(this.data);
      // console.log(this.totalRecords);

    })
  }

}
