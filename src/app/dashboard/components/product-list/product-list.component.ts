import { Component, EventEmitter, Input, OnChanges, AfterViewInit, OnInit, Output, ViewChild } from '@angular/core';
import { AdminProduct } from '../../interface/product';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { map } from 'rxjs/operators';


import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input('productArr') productArr = [];
  showCaseArr: any = [];
  @Input('role') role = 1;
  @Output() deleteEvent = new EventEmitter();
  // dataSource:any=[];
 dataSource: any = new MatTableDataSource<AdminProduct>(this.productArr);

  displayedColumns = ['Id', 'Images', 'Name', 'Color', 'Size', 'Price', 'Edit', 'View', 'Delete'];
  // dataSource:any =[];
  listData: MatTableDataSource<any>;
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
   @ViewChild(MatSort, {static: true}) sort: MatSort;




data = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (res: any) => {
        const data = res.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });

    }


 ngOnChanges(){
  this.dataSource = this.productArr;


 }
 ngAfterViewInit(){
 // this.dataSource.paginator = this.dataSource.paginator;
  // this.dataSource.sort=this.sort;
 }



    deleteProduct(id, name) {
      const bool = window.confirm(`Are you sure you want to delete ${name}`);
      if (bool) {
        this.productService.deleteProduct(id).subscribe(
          (res) => {
            this.deleteEvent.emit();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }




}


