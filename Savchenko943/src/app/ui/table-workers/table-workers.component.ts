import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyProduct, MyProductType } from 'src/app/shared/product.model';

@Component({
  selector: 'app-table-workers',
  templateUrl: './table-workers.component.html',
  styleUrls: ['./table-workers.component.css']
})
export class TableWorkersComponent implements OnInit {
  @Input()products:MyProduct[]=[];
  @Input()title:string;
  myProductType = MyProductType;
  @Output()deleteProduct = new EventEmitter<number>();
  @Output()editProduct = new EventEmitter<object>();
  status:boolean;
  sortM: string;

  constructor() { }

  ngOnInit(): void {
  }

  getByType(type:number){
    return this.products.filter((product) => product.type === type);
  }
  onDeleteProduct(id:number){
    this.deleteProduct.emit(id);

  }
  onEditProduct(product){
    this.editProduct.emit(product)
  }
  showForm(id){
    let form = document.getElementById(id);
    form.classList.toggle("d-none");
  }
  change_status(id){
    let index = this.products.findIndex((product) => product.id === id);
    this.products[index].status = !this.products[index].status;
  }

}
