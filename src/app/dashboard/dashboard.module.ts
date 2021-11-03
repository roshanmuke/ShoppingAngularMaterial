import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule , FormsModule} from "@angular/forms";
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';


const routes : Routes= [
  {path:'dashboard', component:DashboardComponent},
  {path:'admin-dashboard', component:AdminDashboardComponent},
  {path:'customer-dashboard', component:CustomerDashboardComponent},
  { path: "addProduct/:action", component: ProductComponent },
  { path: "editProduct/:action/:id", component: ProductComponent },
  { path: "viewProduct/:action/:id", component: ProductComponent },

  { path:'user', component:UserComponent},
  { path: "addUser/:action", component: UserListComponent },
  { path: "editUser/:action/:id", component: UserListComponent },
  { path: "viewUser/:action/:id", component: UserListComponent },

  

 {path: '',redirectTo: 'dashboard',pathMatch: 'full'}

];

@NgModule({
  declarations: [DashboardComponent, AdminDashboardComponent, CustomerDashboardComponent, ProductListComponent,ProductComponent, UserComponent, UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers:[ProductService]
})
export class DashboardModule { }
