import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SearchModule } from './search/search.module';
import { PlayoptionsComponent } from './playoptions/playoptions.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayoptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    SearchModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
