import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(public http:HttpClient) { }
  public ApiRoute = 'http://localhost:3030' //'https://project4-igal-store.herokuapp.com'
  

    public getCart(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/carts/cart',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getItems(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/carts/items',{cart_id:data},{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public changeQuantity(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.put(this.ApiRoute+'/api/carts/changequantity',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public viewCart(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/carts/cart',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public addCart(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/carts/addcart',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public addItem(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/carts/addcartitem',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public deleteItem(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/carts/deleteitem',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public deleteCart(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/carts/deletecart',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public addOrder(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/carts/addorder',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }
    
    public checkOrderDateAvailaility(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/carts/checkOrderDateAvailaility',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public dateConvert(date){
      let dateArr=date.split("-");
      console.log(dateArr);
      date = `${dateArr[2]}-${dateArr[1]}-${dateArr[0]}`;
      console.log(`in dateConvert: ${date}`);
      return date;
    }
}
