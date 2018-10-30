import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playoptions',
  templateUrl: './playoptions.component.html',
  styleUrls: ['./playoptions.component.css']
})
export class PlayoptionsComponent implements OnInit {

  constructor(private router: Router,
     private route: ActivatedRoute) { }
  url : string; 
  ngOnInit() {
    this.route.queryParams.subscribe((param)=>{
      if (param['v'] == null ) {
        this.router.navigate['/'];
      }else{
        this.url = param['v'];
      }
    })
  }

}
