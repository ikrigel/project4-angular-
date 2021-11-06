import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-shop-categorys',
  templateUrl: './shop-categorys.component.html',
  styleUrls: ['./shop-categorys.component.css']
})
export class ShopCategorysComponent implements OnInit {

  constructor(public fb: FormBuilder, public productsService:ProductsService) { }

  @Output() addItem = new EventEmitter();
  public categorys
  public categoryProducts = 0
  public products = []
  public ifPopup = false;
  public productPopup
  public quantity = 1
  public searchString = "";
  public messageHere = "Please Choose a category or do a search to start shopping"
  public ApiRouteInto = this.productsService.ApiRoute;

  ngOnInit() {
    this.productsService.getcategorys().subscribe(
      (res: any) => {
        this.categorys = res.message
      }, err => window.location.href = "/"
    )
  }

  public changeCategory(cat, categoryName) {
    this.categoryProducts = cat;
    this.productsService.getproducts({ category_id: cat }).subscribe(
      (res: any) => {
        this.products = res.message
        this.messageHere = "Category " + categoryName
      }, err => console.log(err)
    )
  }

  public popupProduct(product) {
    this.productPopup = product
    this.ifPopup = true;
  }

  public closePopup(event) {
    if (event.target.id === "backgroundPopup") { this.ifPopup = false; this.quantity = 1 }
  }

  public closePopupCross() {
    this.ifPopup = false
    this.quantity = 1
  }

  public changeQuantity(x) {
    if (x === '+') { this.quantity < 20 ? this.quantity++ : 'no' }
    else if (x === '-') { this.quantity > 1 ? this.quantity-- : 'no' }
  }

  public search() {
    this.categoryProducts = 1
    console.log(`this.searchString:${this.searchString}`);
    
    this.productsService.searchProduct(this.searchString).subscribe(
      (res: any) => {
        this.products = res.message
        this.messageHere = "Results for: " + this.searchString
        this.searchString = "";
      }, err => console.log(err)
    )
  }

  public addToCart(product_id) {
    this.addItem.emit({ product_id, quantity: this.quantity })
    this.ifPopup = false;
    this.quantity = 1
  }

}
