import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  resume = {};

  constructor(private config: ConfigService){ }

  ngOnInit() {
    this.resume = this.getResume();
  }

  getResume(){
    return this.config.getConfig().resume
  }

}
