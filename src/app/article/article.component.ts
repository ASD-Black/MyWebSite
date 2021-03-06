import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

import { from } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  post = {};

  constructor(private route: ActivatedRoute, private config: ConfigService, private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.post = this.getPostByID(id);
  }

  getPostByID(id: number){
    return this.config.getPostByID(id);
  }

  getBack(){
    this.location.back();
  }

}
