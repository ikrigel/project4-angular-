import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public http:HttpClient) { }

   public ApiRoute = 'http://localhost:3030' //'https://project4-igal-store.herokuapp.com'
  

    
    public getcategorys(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/products/categorys',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public getproducts(category_id){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/products/products',category_id,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public searchProduct(searchString){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/products/search',{searchString:searchString},{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public uploadImg(data){
     
      return this.http.post(this.ApiRoute+'/api/products/upload',data)
      
      
    }

    public addProduct(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/products/addproduct',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    public modifyProduct(data){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.post(this.ApiRoute+'/api/products/modifyproduct',data,{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }
}
