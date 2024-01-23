import { Component } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {

  constructor(private authServise : AuthGuardService , private router : Router){}

  outputClickHandler(){

    this.authServise.isLoginUser = false

    this.router.navigate(['/admin-setting'])

  }

}
