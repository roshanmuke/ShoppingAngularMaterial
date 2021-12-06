import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule} from '@angular/router';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { ProductComponent } from './components/product/product.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';

import {MatListModule} from '@angular/material/list';






const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
  {path: 'customer-dashboard', component: CustomerDashboardComponent},
  { path: 'addProduct/:action', component: ProductComponent },
  { path: 'editProduct/:action/:id', component: ProductComponent },
  { path: 'viewProduct/:action/:id', component: ProductComponent },

  { path: 'user', component: UserComponent},
  { path: 'addUser/:action', component: UserListComponent },
  { path: 'editUser/:action/:id', component: UserListComponent },
  { path: 'viewUser/:action/:id', component: UserListComponent },



 {path: '', redirectTo: 'admin-dashboard', pathMatch: 'full'}

];

@NgModule({
  declarations: [DashboardComponent, AdminDashboardComponent, CustomerDashboardComponent, ProductListComponent,
     ProductComponent, UserComponent, UserListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatListModule




  ],
  providers: [ProductService]
})
export class DashboardModule { }
