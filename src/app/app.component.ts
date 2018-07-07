import { UserService } from './services/user.service';
import { Address } from './model/address';
import { UserModel } from './model/user-model';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    UserService
  ]
})

export class AppComponent {
  title = 'app';
  user: UserModel;
  animal =' '  
  adresses: Array<Address>;
  newAdresses = new Address();
  newUser = new UserModel();
  logado = false;

  constructor(private _userService: UserService){
    this.user = new UserModel();
    this.adresses = new Array<Address>();
    this._userService.getUser().then(user => {
      this.user = user;
    });
  }

  setFormulario(){ 
    let address = this.newAdresses ;
    if(address != null){
      this.user.address.push(this.newAdresses);
      console.log(this.user.address);
    }    
  }

  saveUser() {
    if(this.newUser.nome && this.newUser.idade){
      this._userService.createUser(this.newUser).then(user =>{    
        this.user = user;
        let address = this.newAdresses ;
        if(address != null){
          this.user.address.push(this.newAdresses);
          console.log(this.user.address);
        }
        console.log(user);
      }).catch(e =>{
        console.log(e);
      })
    }
  }

  addAddress() {
    if(this.newAdresses.endereco && this.newAdresses.uf && this.newAdresses.numero){
      this._userService.addAddress(this.newAdresses).then(adresses =>{    
        this.user.address.push(adresses);
      }).catch(e =>{
        console.log(e);
      })
    }
  }

  removeAddress(deleteIndex: number) {
    if(this.newAdresses.endereco && this.newAdresses.uf && this.newAdresses.numero){
      this._userService.removerAddress(deleteIndex).then(adresses => {    
        let address = this.newAdresses ;
      }).catch(e =>{
        console.log(e);
      })
    }
  }


}
