import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      title: '商品名1',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: '/detail/'
    },
    {
      title: '商品名2',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: '/detail/'
    },
    {
      title: '商品名3',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: '/detail/'
    },
    {
      title: '商品名4',
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      url: '/detail/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
