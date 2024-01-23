import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './financial/financial.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { ReformsComponent } from './reforms/reforms.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuardService } from './auth-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {path : '' , component : HomeComponent },
    {path : 'financial-operations' , component : FinancialComponent},
    {path : 'admin-setting' , component : AdminSettingComponent},
    {path : 'panel' , component : AdminPanelComponent , canActivate : [AuthGuardService] },
    {path : 'reforms' , component : ReformsComponent},
    {path : 'reports' , component : ReportsComponent},   
];

@NgModule({
    declarations : [
     AppComponent,
     FinancialComponent,
     MenuHeaderComponent,  
     AdminSettingComponent,
     AdminPanelComponent,
     HomeComponent,
     ReformsComponent 
    ],
    imports : [
     BrowserModule,   
     CommonModule,   
     FormsModule,
     HttpClientModule,
     ReactiveFormsModule,
     RouterModule.forRoot(routes)
    ],
    providers : [AuthGuardService],
    schemas : [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap : [AppComponent]
})

export class appRoutingModule {}