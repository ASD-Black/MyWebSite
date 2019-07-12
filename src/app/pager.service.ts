import { Injectable } from '@angular/core';
import { NgModule } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class PagerService {

  constructor() { }

  getPager(totalItems: number, currentPage: number =1, pageSize: number = 5){
    
    let totaPages = Math.ceil(totalItems / pageSize);

    if(currentPage < 1){
      currentPage = 1;
    }else if(currentPage > totaPages){
      currentPage = totaPages;
    }

    let startPage: number;
    let endPage: number;

    if(totaPages <= 10){
      startPage = 1;
      endPage = totaPages;
    } else{
      // if more than 10 pages
      if(currentPage <= 6){
        startPage = 1;
        endPage = 10; 
      } else if(currentPage + 4 >= totaPages){
        startPage = totaPages - 9;
        endPage = totaPages;
      }else{
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    // calculate start and end indexItems
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min((startIndex + pageSize - 1), (totalItems - 1));
    
    // create and array of pages
    let pages = Array.from(Array((endPage - 1) - startPage).keys()).map(i => startPage + 1);

    return{
      
    }




  }
}
