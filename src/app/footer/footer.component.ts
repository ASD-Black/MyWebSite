import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerSocialLinks = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.footerSocialLinks = this.getSocial();
  }

  getSocial(){
    return this.config.getConfig().footerSocialLinks;
  }

}
