import { Component, OnInit } from '@angular/core';
import { Season } from '../../core/model/season';
import { ApiService } from '../../core/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PagerService } from '../../core/services/pager.service';

@Component({
  selector: 'app-season-search',
  templateUrl: './season-search.component.html',
  styleUrls: ['./season-search.component.css']
})
export class SeasonSearchComponent implements OnInit {

  seasons: Season[];
  isSearched = false;
  loading: boolean = false;
  constructor(private apiService: ApiService,private route: ActivatedRoute,
    private router: Router, private pagerService : PagerService) {}

  //array of all items to be paged
    private allSeasons: any[];

    //pager object
    pager: any = {};

    paramOffset = 5;

    //paged items
    pagedSeasons: any[];
  ngOnInit() {
    this.route.params.subscribe(param => {
      if (param['title']) {
        if (param['offset']) {
          this.paramOffset = parseInt(""+param['offset']);
          this.onSearch(param['title'], this.paramOffset);
        }else{
          this.onSearch(param['title'], this.paramOffset);
        }
      }else{
        this.router.navigate(['/search/searchseasons']);
      }
    })
  }
  onSearch(title, offset){
      this.apiService.searchSeason(title).subscribe(data=>{
        this.loading = true;
        this.seasons = data.season;
        this.allSeasons = data.season;

        //initial to page 1
        this.setPage(1, offset);
      });
  };
  setPage(page: number, offset: number){
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    //get pager object from service
    this.pager = this.pagerService.getPager(this.allSeasons.length, page, offset);

    //get items of current page
    this.pagedSeasons = this.allSeasons.slice(this.pager.startIndex, 
    this.pager.endIndex + 1);
    window.scrollTo(15,15);
  }

  onNavigateSearch(title: string){
    console.log("this ", this.paramOffset);
    this.router.navigate(['/search/searchseasons', {title: title, offset: 5}]);
  }
}
