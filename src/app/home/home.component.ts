import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home = {};
  footerSocialLinks = {};

  constructor(private config: ConfigService){}

  ngOnInit() {
    this.home = this.getHome();
    this.footerSocialLinks = this.getSocial();
  }

  getHome(){
    return this.config.getConfig().home;
  }
  getSocial(){
    return this.config.getConfig().footerSocialLinks;
  }  

}
