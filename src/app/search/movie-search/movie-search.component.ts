import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/model/movie';
import { ApiService } from '../../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent implements OnInit {

  movies: Movie[];
  totalCount = 0;
  isSearched = false;
  loading: boolean = false;
  constructor(private apiService: ApiService,private route: ActivatedRoute,
    private router: Router) {}
  ngOnInit() {
  }
  onSearch(title, rows, pageno){
    console.log(title);
      this.apiService.searchMovie(title, rows, pageno).subscribe(data=>{
        this.loading = true;
        this.movies = data.movie;
        this.totalCount = data.totalCount;
        console.log("total count", this.totalCount);
      })
  }
  paginate(event, title){
      console.log("first",event.first)
      console.log("rows", event.rows);
      console.log("page", event.page)
      console.log("pagecount", event.pageCount)
      this.onSearch(title, event.rows, event.page);
  }
    
}
