import { Component } from '@angular/core';
import {ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
//accessing the element which has local ref f on it and store it in the variable signupform
  @ViewChild('f') signUpForm : NgForm
  constructor() {
    this.signUpForm = new NgForm([], []);
  }
  defaultQues='pet';
  answer='';
  genders=['male','female'];
  defaultname='UserName';
  defaultemail='Email@gmail.com';
  submitted=false;
  user= {
    username:'',
    email:'',
    secretquestion:'',
    answer:'',
    gender:''
  };
  suggestUserName() {
    const suggestedName = 'Revathi Sekar';
    //setting value setValue is used to set whole form patchvalue is used to override part of the form
    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    });
  }

//   onSubmit(form : NgForm){
// console.log(form)
//   }
  onSubmit(){
    this.submitted=true;
    this.user.username=this.signUpForm.value.userData.username;
    this.user.email=this.signUpForm.value.userData.email;
    this.user.secretquestion=this.signUpForm.value.secret;
    this.user.answer=this.signUpForm.value.answer;
    this.user.gender=this.signUpForm.value.gender;
    this.signUpForm.resetForm();
  }
}
