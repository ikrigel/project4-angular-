import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { CartsService } from '../services/carts.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(public fb: FormBuilder, public usersService: UsersService, public cartsService: CartsService) { }
  public ifDisplay = false;
  public cart = -1;
  public arrItems = [];
  public arrList = [];
  public newArr1 = [];
  public totalPrice = 0;
  public dataOrder;
  public minDate;
  public maxDate;
  public user;
  public ifPopup = false;
  public ifPopupError = false;
  public pathPdf = "";
  public btnOrder = "Order"
  public searchString = ""
  public datesProhibited = []
  public validDate = false
  public errorDate = ""
  public apiRouteInto = this.cartsService.ApiRoute;
  public receiving_date;

  ngOnInit() {
    this.usersService.ifToken().subscribe(
      (res: any) => {
        if (res.message.admin) {
          window.location.href = "/"
        }
        else { this.ifDisplay = true }
      },
      err => window.location.href = "/"
    )

    this.cartsService.getCart().subscribe(
      (res: any) => {
        if (res.message !== 'No results cart') {
          this.cart = res.message[0].cart_id;
          this.takeItems()
        }
        else {
          window.location.href = "/shop"
        }
      },
      err => { window.location.href = "/shop" }
    )

    this.usersService.getUser().subscribe(
      (res: any) => {
        this.user = res.message[0];
      }, err => console.log(err)
    )

    this.cartsService.checkOrderDateAvailaility().subscribe(
      (res: any) => {
        this.datesProhibited = res.message
      }, err => { console.log(err) }
    )

    this.dataOrder = this.fb.group({
      received_city: [, Validators.required],
      received_adress: ["", [Validators.minLength(2), Validators.maxLength(20), Validators.required]],
      received_date: ["", Validators.required],
      // payment_number: ["", [Validators.pattern('[0-9]{16}'), Validators.required]]
      payment_number: ["", [this.validateCreditCard, Validators.required]]
    })
    
    let myDate = new Date()
    myDate.setDate(myDate.getDate() + 2);
    this.minDate = myDate.toISOString().split("T")[0];
    let myMaxDate = new Date()
    myMaxDate.setDate(myMaxDate.getDate() + 90 + this.datesProhibited.length);
    this.maxDate = myMaxDate.toISOString().split("T")[0];
  }

  disableDates(args) {
    console.log(args);

  }
  paymentValidation(){
    let valid=true;
    if(!Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$'))valid=false; 
    return valid;
  }
   validateCreditCard(c: FormControl) {
    const VISA_REGEX = /^4[0-9]{12}(?:[0-9]{3})?$/; // Regular Expression 1
    const MASTERCARD_REGEX = /^5[1-5][0-9]{14}$/; // Regular Expression 2
    const AMEX_REGEX = /^3[47][0-9]{13}$/; // Regular Expression 3
    return (VISA_REGEX.test(c.value) || MASTERCARD_REGEX.test(c.value) || AMEX_REGEX.test(c.value) || c.value=="") ? null : {
      validateInput: {
        valid: false,
        cardError:"Please enter a valid credit card"
      }
    };
  } 

  takeItems() {
    this.cartsService.getItems(this.cart).subscribe(
      (res: any) => {
        if (res.message === "No results!!!") { this.arrItems = []; return }
        this.arrItems = res.message
        this.arrList = res.message
        let total = 0
        for (let i = 0; i < res.message.length; i++) {
          total += res.message[i].price * res.message[i].quantity
        }
        this.totalPrice = total;
      },
      err => console.log(err)
    )
  }

  public automaticCity() {
    this.dataOrder.controls['received_city'].setValue(this.user.city.toLowerCase())
  }

  public automaticAdress() {
    this.dataOrder.controls['received_adress'].setValue(this.user.adress)
  }

  public submitOrder() {
    this.btnOrder = "one moment ..."
    let datenow = new Date();
    let thedatenow = datenow.toISOString().split("T")[0];
    thedatenow = this.cartsService.dateConvert(thedatenow);



    this.cartsService.addOrder({ ...this.dataOrder.value, user_id: this.user.i_d, cart_id: this.cart, total_price: this.totalPrice.toFixed(2), products: this.arrItems, user_name: this.user.first_name + " " + this.user.last_name, datenow: thedatenow }).subscribe(
      (res: any) => {
        if (res.state = "success") {
          this.ifPopup = true;
          this.pathPdf = res.receiptPdf
        }
        else { this.ifPopupError = true; }
      },
      err => {
        console.log(err)
        this.ifPopupError = true;
      }
    )
  }

  public searchCart() {
    this.newArr1 = [];
    if (this.searchString === "") {
      this.arrList = this.arrItems;
      return
    }
    let newArr = [];
    for (let i = 0; i < this.arrItems.length; i++) {
      if (this.arrItems[i].product_name.toLowerCase().includes(this.searchString.toLowerCase(), 0)) {
        newArr.push(this.arrItems[i])
      }
    }
    this.arrList = newArr;
    this.newArr1 = newArr;
  }

  public inputDate() {
    let theDate = this.dataOrder.value.received_date;
    this.dataOrder.value.received_date = this.cartsService.dateConvert(this.dataOrder.value.received_date);
    this.receiving_date = this.dataOrder.value.received_date;
    this.dataOrder.received_date = this.receiving_date;
    if (theDate >= this.minDate && theDate <= this.maxDate) {
      for (let i = 0; i < this.datesProhibited.length; i++) {
        if (theDate === this.datesProhibited[i].received_date.split("T")[0]) {
          this.validDate = false;
          this.errorDate = "Please choose a different day. No deliveries available for this date."

          return
        }
      }
      console.log(`this.dataOrder.value.received_date: ${this.dataOrder.value.received_date}`);
      theDate = this.cartsService.dateConvert(theDate);
      this.errorDate = ""
      this.validDate = true
    }
    else {
      this.errorDate = "chose date between " + this.minDate + " and " + this.maxDate
      this.validDate = false
    }
  }

}


