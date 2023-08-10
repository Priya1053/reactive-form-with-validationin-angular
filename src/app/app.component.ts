import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  dataform = new FormGroup({
    'name': new FormControl('',[Validators.required]),
    'email' : new FormControl('',[Validators.required,Validators.email]),
    'food': new FormControl('',[Validators.required]),
    'mobileno': new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)])
  })

saveData()
{
  console.log(this.dataform.valid);
  
  if(this.dataform.valid){
    console.log(this.dataform.value);
  
}
}
  foods: Food[] = [
    {value: 'maggie-0', viewValue: 'Maggie'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'burger-2', viewValue: 'Burger'},   

  ];
  get name(){
    return this.dataform.get('name');
  }
  get email()
  {
    return this.dataform.get('email');
  }
  get food(){
    return this.dataform.get('food');
  }
  get mobileno(){
    return this.dataform.get('mobileno');
  }
}


