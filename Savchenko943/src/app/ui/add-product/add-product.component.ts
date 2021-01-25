import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyProduct, MyProductType } from 'src/app/shared/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myProductType = MyProductType;
  type:0;
  status:false;

  myForm1: FormGroup = new FormGroup({
    "name": new FormControl("",[Validators.required]),
    "quantity": new FormControl("", [Validators.required]),
  });

  @Output() addProduct = new EventEmitter<MyProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddProduct(){
    this.addProduct.emit({
      name: this. myForm1.controls["name"].value,
      quantity: this. myForm1.controls["quantity"].value,
      type: 0,
      status: false
    });
  }

}
