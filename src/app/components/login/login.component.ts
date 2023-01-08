import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  // login form creating
  logIn= this.bf.group({
    pn:['',[Validators.required,Validators.pattern('[A-Za-z]*')]],
    pass:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

  constructor(private bf:FormBuilder) { }

  ngOnInit(): void {
  }
  log(){
    console.log(this.logIn.get('pn')?.errors);

    if (this.logIn.valid) {
      let pn=this.logIn.value.pn
      let pass=this.logIn.value.pass
      // console.log(pn);
      // console.log(pass);
      
      alert('loginclicked')
    }
    else{
      alert('invalid form')
    }

  }

}

