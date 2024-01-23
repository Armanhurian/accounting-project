import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrl: './admin-setting.component.css'
})
export class AdminSettingComponent implements OnInit{

  
  constructor (private dataService : DataService , private authService : AuthGuardService , private router : Router, private http : HttpClient){}
  
  myLoginForm = new FormGroup({
    username : new FormControl(''),
    password : new FormControl(''),
  })
  
  
  submitLogin(){
    
    if(this.myLoginForm.value.username === 'حاتمه جنتی' && this.myLoginForm.value.password === 'Hatamehjanati1234'){

      this.authService.submitHandler(this.myLoginForm.value.username , this.myLoginForm.value.password)

      this.router.navigate(['/panel'])
      
      
    }else{
      
      // alert('متاسفانه نمیتوانید وارد شوید')

      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      
      
    }
    console.log(this.myLoginForm.value);
    
  

    
    
  }


  
  ngOnInit(): void {
   
    if(this.authService.isLoginUser){
      
      this.router.navigate(['/panel'])
    }
    
  }

}
