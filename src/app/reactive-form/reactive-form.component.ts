// import {Component, OnInit} from '@angular/core';
// import {FormGroup,FormControl,FormArray,Validators} from "@angular/forms";
// @Component({
//   selector: 'app-reactive-form',
//   templateUrl: './reactive-form.component.html',
//   styleUrls: ['./reactive-form.component.css']
// })
// export class ReactiveFormComponent implements OnInit{
//   genders = ['male', 'female'];
//   //creating form programatically
//   loginForm : FormGroup;
//   //creating custom Validator
//   forbiddenUsername=['Revathi','Sekar'];
//   constructor() {
//     this.loginForm = new FormGroup([])
//   }
//   ngOnInit() {
//     //form initialization//adding form controls//grouping the form controls
//     this.loginForm = new FormGroup({
//       'userData':new FormGroup({
//         'username':new FormControl(null,[Validators.required]),
//         'email': new FormControl(null,[Validators.required,Validators.email])
//       }),
//       'gender' : new FormControl('male'),
//       'hobbies':new FormArray([])
//     });
//     this.loginForm.setValue({
//       'userData':{
//         'username':'Sheri',
//         'email':'sheri@gamil.com'
//       },
//       'gender':'male',
//       'hobbies':[]
//     })
//     this.loginForm.patchValue({
//       'userData':{
//         'username':'Taj'
//       }
//     })
//   }
//   onSubmit(){
//     console.log(this.loginForm);
//     this.loginForm.reset();
//   }
// }
