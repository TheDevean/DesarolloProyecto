import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClientsComponent } from './componenets/clients/clients.component';
import { SalesComponent } from './componenets/sales/sales.component';
import { InventoryComponent } from './componenets/inventory/inventory.component';
import { HeaderComponent } from './componenets/header/header.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { HomeComponent } from './componenets/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { ClientService } from './services/client/client.service';
import { InventoryService } from './services/inventory/inventory.service';
import { SalesService } from './services/sales/sales.service';
import { CreateComponent } from './componenets/sales/create/create.component';
import { ListComponent } from './componenets/sales/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './componenets/login/login.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { UsersService } from './services/user/users.service';

var roots = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'sales', component: SalesComponent, canActivate : [AuthenticationGuard] },
  { path: 'clients', component: ClientsComponent, canActivate : [AuthenticationGuard] },
  { path: 'inventory', component: InventoryComponent, canActivate : [AuthenticationGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
      AppComponent,
      ClientsComponent,
      SalesComponent,
      HeaderComponent,
      FooterComponent,
      HomeComponent,
      InventoryComponent,
      FilterPipe,
      CreateComponent,
      ListComponent,
      LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(roots)
  ],
  providers: [
    ClientService,
    InventoryService,
    SalesService,
    AuthenticationGuard,
    UsersService
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
