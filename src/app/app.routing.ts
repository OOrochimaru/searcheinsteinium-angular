import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeasonSearchComponent } from './search/season-search/season-search.component';
import { MovieSearchComponent } from './search/movie-search/movie-search.component';
import { SearchComponent } from './search/search.component';
import { PlayoptionsComponent } from './playoptions/playoptions.component';

const route: Routes = [
  {path: '', redirectTo: 'search', pathMatch:'full'},
  {path: 'search', component: SearchComponent,
  children: [
    {path: 'searchseasons', component: SeasonSearchComponent},
    {path: 'searchmovies', component: MovieSearchComponent}
  ]
},
{path: 'playoptions', component: PlayoptionsComponent}
]

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
