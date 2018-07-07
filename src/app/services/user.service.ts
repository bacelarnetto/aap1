import { Address } from './../model/address';
import { UserModel } from './../model/user-model';
import { Injectable } from '@angular/core';
import { reject } from 'q';

@Injectable()
export class UserService {
  private USER_STORAGE_NAME ='user';
  constructor() { }

  createUser(user: UserModel): Promise<UserModel>{
    return new Promise((resolve, reject) =>{
      if(user){
        localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(user));
        resolve(user);
      }else{
        reject(new Error("dados do usuario invalido"))
      }
    })
  }


  getUser(): Promise<UserModel>{
    return new Promise((resolve, reject) =>{
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if(user){
        try {
          resolve(JSON.parse(user));
        } catch (error) {
          reject(error);
        }        
      }else{
        resolve(null)
      }
    })
  }

  addAddress(address: Address): Promise<Address>{
    return new Promise((resolve, reject) =>{
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if(user){
        try {
          const usermodel =JSON.parse(user) as UserModel;
          if(usermodel.address){
            usermodel.address.push(address);
          }else{
            usermodel.address = [address];
          }         
          localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(usermodel))
          resolve(address);
          
        } catch (error) {
          reject(error);
        }        
      }else{
        resolve(null)
      }
    })
  }


  removerAddress(index): Promise<Address>{
    return new Promise((resolve, reject) =>{
      const user = localStorage.getItem(this.USER_STORAGE_NAME);
      if(user){
        try {
          const usermodel =JSON.parse(user) as UserModel;
          if(usermodel.address){
            usermodel.address.splice(index, 1)
          }       
          localStorage.setItem(this.USER_STORAGE_NAME, JSON.stringify(usermodel))
          resolve(usermodel.address);
          
        } catch (error) {
          reject(error);
        }        
      }else{
        resolve(null)
      }
    })
  }

}
