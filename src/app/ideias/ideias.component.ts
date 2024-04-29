import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { IPainting } from '../interface/IPainting';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms'
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  selector: 'app-ideias',
  templateUrl: './ideias.component.html',
  styleUrl: './ideias.component.css'
})

export class IdeiasComponent {
  sideBarOpen = true;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  

/*  product: IPainting;

  message:string;

  error=false;
  submitted = false;

  selectedFile!: File;

  userProfile:FormGroup  ;


  onFileSelected(event:any): void {
    this.selectedFile = event.target.files[0];
  }

  form:FormData = this.fb.group({
    from_name: ' ',
    from_email:' ',
    phonenumber:' ',
    message:' ',
  });

  constructor(private productService: ProductService, private http: HttpClient, private fb: FormBuilder) {
    this.product = {
      id: '',
      width: 0,
      lenght: 0,
      price: 0,
      description: '',
      image: '' as unknown as Blob,
    };
    this.message="";
   }

   ngOnInit(){

    this.userProfile =  this.fb.group({
         username :['Sunil'],
         address: ['Faridabad'],
         mobile:['8930068008'],
         alias: this.fb.array([
           this.fb.control('')
         ])
      })
    }
  onSubmit(): void {

//ENVIAR MSG DO TELEMOVEL


}

send(){
  emailjs
  .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, {
    publicKey: 'YOUR_PUBLIC_KEY',
  })
  .then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
  },
  (err) => {
    console.log('FAILED...', err);
},
);
}
*/

name = 'Angular';
    userProfile!:FormGroup  ;
    usernameCtrl: any ;
   address: any ;
   mobile: any;
   updateName() {
  // this.username.setValue('Nancy');
  }

  constructor(private fb: FormBuilder){

  }

  get alias(){
    return this.userProfile.get('alias') as FormArray;
  }

  addAlias(){
    this.alias.push(this.fb.control(''));
  }

ngOnInit(){

this.userProfile =  this.fb.group({
  from_name :'',
  to_name:'Matilde',
  from_email: '',
     phonenumber:'',
     message:'',
     alias: this.fb.array([
       this.fb.control('')
     ])
  })
}

async send(){
  emailjs.init('zvanmggZ2iw90266w')
  let response  =await emailjs.send('service_x1bvvf9', 'template_6v6uqa7', {
    from_name: this.userProfile.value.from_name,
    to_name:this.userProfile.value.to_name,
    from_email:this.userProfile.value.from_email,
    phonenumber:this.userProfile.value.phonenumber,
    message:this.userProfile.value.message,
    
  });

  this.userProfile.reset();
}
}
