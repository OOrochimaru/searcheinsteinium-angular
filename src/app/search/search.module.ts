import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { SeasonSearchComponent } from './season-search/season-search.component';
import { SearchComponent } from './search.component';
import { RouterModule } from '@angular/router';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PaginatorModule
  ],
  declarations: [
    SearchComponent,
    MovieSearchComponent,
    SeasonSearchComponent
  ]
})
export class SearchModule { }
