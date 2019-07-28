import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
    brands=[
    {
      brandname:"levis",
      branddesc:"clothing brand", 
      brandurl:"https://www.w3schools.com/html/tryit.asp?filename=tryhtml_links_w3schools"
    },
    {
      brandname:"puma",
      branddesc:"shoesbrand",
      brandurl:"https://www.w3schools.com/angular/ng_ng-href.asp"
      
    }
  ]
  constructor() { }

  ngOnInit() {
  }
}
