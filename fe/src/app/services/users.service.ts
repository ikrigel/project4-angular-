import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }
  public ApiRoute = 'http://localhost:3030' //'https://project4-igal-store.herokuapp.com'
  

    public ifToken(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/users/verifytoken',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    

    public getUser(){
      let token = localStorage.getItem('Token') || sessionStorage.getItem('Token');
      return this.http.get(this.ApiRoute+'/api/users/user',{
        headers: { 'Content-Type': 'application/json', 'authorization': token }
      })
    }

    
    public getlogin(data){
      return this.http.post(this.ApiRoute+'/api/users/login',data)
    }

    public getinfo(){
      return this.http.get(this.ApiRoute+'/api/users/generalInformation')
    }

    public verifyIdOrEmail(data){
      return this.http.post(this.ApiRoute+'/api/users/verifidmail',data)
    }

    public signupNewUser(data){
      return this.http.post(this.ApiRoute+'/api/users/add',data)
    }
}
